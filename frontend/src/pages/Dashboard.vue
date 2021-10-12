<template>
  <div>
    <div class="row">
      <div class="col-lg">
        <card class="card-body">
          <div>
            <div class="row">
              <div class="col-5">
                <div class="icon-big text-center">
                  <i class="tim-icons icon-money-coins text-success" style="font-size: 40px;"></i>
                </div>
              </div>
              <div class="col-7">
                <div class="numbers">
                  <p>Outstanding Bill</p>
                  <h3 style="margin-bottom:0px">$120.45</h3>
                </div>
              </div>
            </div>
            <div>
              <hr />
              <div class="stats"><i class="tim-icons icon-refresh-01"></i> Updated now</div>
            </div>
          </div>
        </card>
      </div>
      <div class="col-lg">
        <card class="card-body">
          <div>
            <div class="row">
              <div class="col-5">
                <div class="icon-big text-center">
                  <i class="fas fa-bolt text-success" style="font-size: 40px;"></i>
                </div>
              </div>
              <div class="col-7">
                <div class="numbers">
                  <p>Electricity Consumption</p>
                  <h3 style="margin-bottom:0px">362 KWh</h3>
                </div>
              </div>
            </div>
            <div>
              <hr />
              <div class="stats"><i class="tim-icons icon-refresh-01"></i> Updated now</div>
            </div>
          </div>
        </card>
      </div>
      <div class="col-lg">
        <card class="card-body">
          <div>
            <div class="row">
              <div class="col-5">
                <div class="icon-big text-center">
                  <i class="fas fa-tint text-success" style="font-size: 40px;"></i>
                </div>
              </div>
              <div class="col-7">
                <div class="numbers">
                  <p>Water Consumption</p>
                  <h3 style="margin-bottom:0px">53.8 L</h3>
                </div>
              </div>
            </div>
            <div>
              <hr />
              <div class="stats"><i class="tim-icons icon-refresh-01"></i> Updated now</div>
            </div>
          </div>
        </card>
      </div>
      <div class="col-lg">
        <card class="card-body">
          <div>
            <div class="row">
              <div class="col-5">
                <div class="icon-big text-center">
                  <i class="fas fa-burn text-success" style="font-size: 40px;"></i>
                </div>
              </div>
              <div class="col-7">
                <div class="numbers">
                  <p>Gas Consumption</p>
                  <h3 style="margin-bottom:0px">91,201 BTU</h3>
                </div>
              </div>
            </div>
            <div>
              <hr />
              <div class="stats"><i class="tim-icons icon-refresh-01"></i> Updated now</div>
            </div>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <card type="chart">
          <template slot="header">
            <div class="row">
              <div class="col-sm-6 text-left">
                <h2 class="card-title">{{ $t("dashboard.monthlyConsumption") }}</h2>
              </div>
              <div class="col-sm-6">
                <div
                  class="btn-group btn-group-toggle float-right"
                  data-toggle="buttons"
                >
                  <label
                    v-for="(option, index) in bigBarChartCategories"
                    :key="option"
                    class="btn btn-sm btn-primary btn-simple"
                    :class="{ active: bigBarChart.activeIndex === index }"
                    :id="index"
                  >
                    <input
                      type="radio"
                      @click="initBigChart(index)"
                      name="options"
                      autocomplete="off"
                      :checked="bigBarChart.activeIndex === index"
                    />
                    {{ option }}
                  </label>
                </div>
              </div>
            </div>
          </template>
          <div class="chart-area">
            <bar-chart
              style="height: 100%"
              ref="bigChart"
              chart-id="big-bar-chart"
              :chart-data="bigBarChart.chartData"
              :gradient-colors="bigBarChart.gradientColors"
              :gradient-stops="bigBarChart.gradientStops"
              :extra-options="bigBarChart.extraOptions"
            >
            </bar-chart>
          </div>
        </card>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-4" id="elecBreak">
        <card type="chart">
          <template slot="header">
            <h3 class="card-title">
              <i class="fas fa-bolt text-success" style="font-size: 20px;"></i>
              {{ $t("dashboard.electricityBreakdown") }}
            </h3>
          </template>
          <div class="chart-area">
            <doughnut-chart
              style="height: 100%"
              chart-id="doughnut-chart"
              :chart-data="electricityDoughnut.chartData"
              :extra-options="electricityDoughnut.extraOptions"
            >
            </doughnut-chart>
          </div>
        </card>
      </div>
      <div class="col-lg-4" id="waterBreak">
        <card type="chart">
          <template slot="header">
            <h3 class="card-title">
              <i class="fas fa-tint text-success" style="font-size: 20px;"></i>
              {{ $t("dashboard.waterBreakdown") }}
            </h3>
          </template>
          <div class="chart-area">
            <doughnut-chart
              style="height: 100%"
              chart-id="doughnut-chart"
              :chart-data="waterDoughnut.chartData"
              :extra-options="waterDoughnut.extraOptions"
            >
            </doughnut-chart>
          </div>
        </card>
      </div>
      <div class="col-lg-4" id="gasBreak">
        <card type="chart">
          <template slot="header">
            <h3 class="card-title">
              <i class="fas fa-burn text-success" style="font-size: 20px;"></i>
              {{ $t("dashboard.gasBreakdown") }}
            </h3>
          </template>
          <div class="chart-area">
            <doughnut-chart
              style="height: 100%"
              chart-id="doughnut-chart"
              :chart-data="gasDoughnut.chartData"
              :extra-options="gasDoughnut.extraOptions"
            >
            </doughnut-chart>
          </div>
        </card>
      </div>
    </div>
  </div>
</template>
<script>
import LineChart from "@/components/Charts/LineChart";
import BarChart from "@/components/Charts/BarChart";
import DoughnutChart from "@/components/Charts/DoughnutChart"
import * as chartConfigs from "@/components/Charts/config";
import TaskList from "./Dashboard/TaskList";
import UserTable from "./Dashboard/UserTable";
import config from "@/config";

export default {
  components: {
    LineChart,
    BarChart,
    TaskList,
    UserTable,
    DoughnutChart
  },
  data() {
    return {
      electricityDoughnut:{
        extraOptions: chartConfigs.doughnutChartOptions,
        chartData: {
          labels: ["Aircon", "Fridge", "TV", "Fan & Lights", "Others"],
          datasets: [
            {
              label: "Electricity",
              data: [40, 30, 15, 10, 5],
              backgroundColor: [
                'rgb(191, 236, 221)',
                'rgb(118, 232, 194)',
                'rgb(85, 105, 98)',
                'rgb(92, 181, 151)',
                'rgb(36, 71, 60)'
              ]
            },
          ],
        },
      },
      waterDoughnut:{
        extraOptions: chartConfigs.doughnutChartOptions,
        chartData: {
          labels: ["Common", "Master", "Washing Machine" ,"Kitchen"],
          datasets: [
            {
              label: "Water",
              data: [45, 30, 15, 10],
              backgroundColor: [
                'rgb(31, 43, 133)',
                'rgb(18, 25, 79)',
                'rgb(111, 122, 209)',
                'rgb(81, 89, 153)'
              ]
            },
          ],
        },
      },
      gasDoughnut:{
        extraOptions: chartConfigs.doughnutChartOptions,
        chartData: {
          labels: ["Stove 1", "Stove 2", "Stove 3"],
          datasets: [
            {
              label: "Gas",
              data: [40, 30, 30],
              backgroundColor: [
                'rgb(107, 32, 132)',
                'rgb(64, 19, 79)',
                'rgb(185, 113, 209)'
              ]
            },
          ],
        },
      },
      bigBarChart: {
        allData: [
          [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100],
          [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120],
          [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130],
        ],
        activeIndex: 0,
        chartData: {
          datasets: [{}],
          labels: [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC",
          ],
        },
        extraOptions: chartConfigs.bigBarChartOptions,
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
        categories: [],
      },
      purpleLineChart: {
        extraOptions: chartConfigs.purpleChartOptions,
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
          datasets: [
            {
              label: "Data",
              fill: true,
              borderColor: config.colors.primary,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.primary,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.primary,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [80, 100, 70, 80, 120, 80],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.2, 0],
      },
      greenLineChart: {
        extraOptions: chartConfigs.greenChartOptions,
        chartData: {
          labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              borderColor: config.colors.danger,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: config.colors.danger,
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: config.colors.danger,
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: [90, 27, 60, 12, 80],
            },
          ],
        },
        gradientColors: [
          "rgba(66,134,121,0.15)",
          "rgba(66,134,121,0.0)",
          "rgba(66,134,121,0)",
        ],
        gradientStops: [1, 0.4, 0],
      },
      blueBarChart: {
        extraOptions: chartConfigs.barChartOptions,
        chartData: {
          labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
          datasets: [
            {
              label: "Countries",
              fill: true,
              borderColor: config.colors.info,
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: [53, 20, 10, 80, 100, 45],
            },
          ],
        },
        gradientColors: config.colors.primaryGradient,
        gradientStops: [1, 0.4, 0],
      },
    };
  },
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
    bigBarChartCategories() {
      return this.$t("dashboard.chartCategories");
    },
  },
  methods: {
    initBigChart(index) {
      let chartData = {
        datasets: [
          {
            fill: true,
            borderColor: config.colors.primary,
            borderWidth: 2,
            borderDash: [],
            borderDashOffset: 0.0,
            pointBackgroundColor: config.colors.primary,
            pointBorderColor: "rgba(255,255,255,0)",
            pointHoverBackgroundColor: config.colors.primary,
            pointBorderWidth: 20,
            pointHoverRadius: 4,
            pointHoverBorderWidth: 15,
            pointRadius: 4,
            data: this.bigBarChart.allData[index],
          },
        ],
        labels: [
          "JAN",
          "FEB",
          "MAR",
          "APR",
          "MAY",
          "JUN",
          "JUL",
          "AUG",
          "SEP",
          "OCT",
          "NOV",
          "DEC",
        ],
      };
      this.$refs.bigChart.updateGradients(chartData);
      this.bigBarChart.chartData = chartData;
      this.bigBarChart.activeIndex = index;
    },
  },
  mounted() {
    this.i18n = this.$i18n;
    this.i18n.locale = "en";
    this.initBigChart(0);
  }
};
</script>
<style>
</style>
