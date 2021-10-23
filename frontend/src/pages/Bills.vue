<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title" class="relative">
        <div class="table">
          <!-- <loading :loaded="isLoading"/> -->
          <div v-if="!isLoading" class="loader">
            <vue-simple-spinner message="Please wait while we retrieve your bills"></vue-simple-spinner>
          </div>
          <base-table
            :data="table1.data"
            :columns="table1.columns"
            thead-classes="text-primary"
          >
          </base-table>
        </div>
      </card>
    </div>
  </div>
  <!-- <button class="btn btn-primary" @click="stripe">TEST</button> -->
</template>

<script>
import { BaseTable } from "@/components";
import API from "../api/API";

const tableColumns = ["Name", "Amount", "Status"];

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "Bills",
        columns: [...tableColumns],
        data: []
      },
      isLoading: false,
      
    };
  },
  methods: {
    async stripe() {
      const token =
        window.localStorage.getItem("token")
      const priceLink = [
        [
          "https://buy.stripe.com/test_dR6bLhfuy8d6gBWbIK",
          "https://buy.stripe.com/test_eVadTpdmqdxq1H25kn",
          "https://buy.stripe.com/test_cN24iPdmqctmadyfZ2",
          "https://buy.stripe.com/test_9AQ4iPfuy8d6bhC5kp",
          "https://buy.stripe.com/test_9AQ16Dbei1OI5Xi9AG"
        ],
        [
          "https://buy.stripe.com/test_dR6aHdbei3WQgBWbIP",
          "https://buy.stripe.com/test_6oE2aH6Y29ha85q5ks",
          "https://buy.stripe.com/test_6oEbLh3LQ64YfxS7sB",
          "https://buy.stripe.com/test_7sI7v16Y2gJCfxSdR0",
          "https://buy.stripe.com/test_3csaHdbeieBu3Pa3cn"
        ],
        [
          "https://buy.stripe.com/test_bIY5mTfuy1OIdpKcMY",
          "https://buy.stripe.com/test_bIY5mTfuy1OIdpKcMY",
          "https://buy.stripe.com/test_14k7v14PUctm4TeaES",
          "https://buy.stripe.com/test_aEUeXtaae3WQ3PabIX",
          "https://buy.stripe.com/test_dR6eXtaaectmgBW8wM"
        ],
        [
          "https://buy.stripe.com/test_aEU8z5fuy50U5XicN3",
          "https://buy.stripe.com/test_4gw9D9fuy8d65XicN4",
          "https://buy.stripe.com/test_4gwg1x4PU9ha1H23cv",
          "https://buy.stripe.com/test_28o7v16Y28d6bhC6oI",
          "https://buy.stripe.com/test_28o8z5dmq9ha71m4gB"
        ],
        [
          "https://buy.stripe.com/test_6oE5mT5TY3WQfxScN8",
          "https://buy.stripe.com/test_aEU6qX4PUale0CY4gD",
          "https://buy.stripe.com/test_aEU6qX4PUale0CY4gD",
          "https://buy.stripe.com/test_4gw5mT0zE3WQ99ueVU",
          "https://buy.stripe.com/test_9AQ02zcim50UbhC3cC"
        ],
        [
          "https://buy.stripe.com/test_28oaHd96a9ha0CY28z",
          "https://buy.stripe.com/test_fZecPl2HM1OIbhC28A",
          "https://buy.stripe.com/test_7sI6qX3LQgJCetO8wZ",
          "https://buy.stripe.com/test_8wM16D4PUctm5XifZs",
          "https://buy.stripe.com/test_bIYaHd1DIaledpKbJd"
        ],
        [
          "https://buy.stripe.com/test_fZe9D94PUeBugBW8x2",
          "https://buy.stripe.com/test_28o16D3LQfFyfxScNj",
          "https://buy.stripe.com/test_28o16D3LQfFyfxScNj",
          "https://buy.stripe.com/test_3cseXt3LQ3WQadycNl",
          "https://buy.stripe.com/test_9AQg1x4PUeBu2L67t2"
        ],
        [
          "https://buy.stripe.com/test_7sIeXt826eBu5Xi9Bb",
          "https://buy.stripe.com/test_eVa5mT1DI9ha71m5kW",
          "https://buy.stripe.com/test_aEU9D9gyC7920CYaFh",
          "https://buy.stripe.com/test_14k9D96Y29hagBWeVy",
          "https://buy.stripe.com/test_7sIdTpcimdxqfxSfZD"
        ],
        [
          "https://buy.stripe.com/test_bIY3eLaae1OIdpK4gW",
          "https://buy.stripe.com/test_4gw02zcimgJCfxSeVB",
          "https://buy.stripe.com/test_cN23eLdmq3WQdpK7ta",
          "https://buy.stripe.com/test_8wM4iPcim64YetO00J",
          "https://buy.stripe.com/test_8wMeXt96a50U3PacNw"
        ],
        [
          "https://buy.stripe.com/test_eVa02zaae0KE3Pa6p9",
          "https://buy.stripe.com/test_eVa7v196a2SM0CY4h2",
          "https://buy.stripe.com/test_eVa7v196a2SM0CY4h2",
          "https://buy.stripe.com/test_bIY6qX4PU0KEclG6pc",
          "https://buy.stripe.com/test_3csbLh6Y2dxq3Pa00P"
        ],
        [
          "https://buy.stripe.com/test_5kA4iP5TY3WQ5XiaFu",
          "https://buy.stripe.com/test_eVabLh4PUdxqady9Br",
          "https://buy.stripe.com/test_14k2aHcim50UbhC8xo",
          "https://buy.stripe.com/test_bIYeXtequ1OIgBW6ph",
          "https://buy.stripe.com/test_bIYeXtequ1OIgBW6ph"
        ],
        [
          "https://buy.stripe.com/test_dR67v16Y2bpidpK9Bv",
          "https://buy.stripe.com/test_eVa7v1aaefFy4TedRM",
          "https://buy.stripe.com/test_bIY2aHfuy0KE4Te295",
          "https://buy.stripe.com/test_00g3eLdmq64YetO9By",
          "https://buy.stripe.com/test_3cs7v13LQgJC2L66pn"
        ]
      ];
      const priceId = [
        [
          "price_1Jn2eQB1RioPFXqApk07MgDY",
          "price_1Jn2eQB1RioPFXqAnFLbIgtu",
          "price_1Jn2eQB1RioPFXqA4TIaeiA8",
          "price_1Jn2eQB1RioPFXqABGQtYklV",
          "price_1Jn2eQB1RioPFXqAXTu2ykIh"
        ],
        [
          "price_1Jn2feB1RioPFXqAlELFR0Ht",
          "price_1Jn2feB1RioPFXqAZSzPu6JB",
          "price_1Jn2feB1RioPFXqAt84JSAKS",
          "price_1Jn2feB1RioPFXqAFyVvUHOt",
          "price_1Jn2feB1RioPFXqAPY931bzB"
        ],
        [
          "price_1Jn2hBB1RioPFXqA2plQE9gx",
          "price_1Jn2hBB1RioPFXqAXLY1UkRW",
          "price_1Jn2hBB1RioPFXqACXTmn439",
          "price_1Jn2hBB1RioPFXqAysaKsH3B",
          "price_1Jn2hBB1RioPFXqAYcoBw4Pu"
        ],
        [
          "price_1Jn2iRB1RioPFXqAkVeyPMVH",
          "price_1Jn2iRB1RioPFXqA4NgyFsaV",
          "price_1Jn2iRB1RioPFXqAYk4iipHm",
          "price_1Jn2iRB1RioPFXqAIS1AVGzR",
          "price_1Jn2iRB1RioPFXqAay27WaRE"
        ],
        [
          "price_1Jn2jOB1RioPFXqAFwlSFZiD",
          "price_1Jn2jOB1RioPFXqA7WTbdnDc",
          "price_1Jn2jPB1RioPFXqAJK0VQSJg",
          "price_1Jn3IfB1RioPFXqAFUfkfenx",
          "price_1Jn2jPB1RioPFXqAHtAwf8IE"
        ],
        [
          "price_1Jn2kNB1RioPFXqAbIeJjI3e",
          "price_1Jn2kNB1RioPFXqAHjQJNdQK",
          "price_1Jn2kNB1RioPFXqArNAcugeg",
          "price_1Jn2kNB1RioPFXqAQ44s7KZw",
          "price_1Jn2kNB1RioPFXqAzo9wWMiu"
        ],
        [
          "price_1Jn2liB1RioPFXqAS14Y2twp",
          "price_1Jn2liB1RioPFXqALdCj8g2r",
          "price_1Jn2liB1RioPFXqAaXdNmW2l",
          "price_1Jn2liB1RioPFXqACua9FK8N",
          "price_1Jn2liB1RioPFXqA8oTzGQw0"
        ],
        [
          "price_1Jn2n3B1RioPFXqA2O6bcP1r",
          "price_1Jn2n3B1RioPFXqAwc6PaFzh",
          "price_1Jn2n3B1RioPFXqAxY1NhITW",
          "price_1Jn2n3B1RioPFXqAwF34MvGK",
          "price_1Jn2n3B1RioPFXqAFyIa7WaJ"
        ],
        [
          "price_1Jn2oEB1RioPFXqAXdAOpTyz",
          "price_1Jn2oEB1RioPFXqA8ZYTX5QV",
          "price_1Jn2oEB1RioPFXqAPjD0fnae",
          "price_1Jn2oEB1RioPFXqAe0FxXbP5",
          "price_1Jn2oEB1RioPFXqA4jb6fTHj"
        ],
        [
          "price_1Jn2pPB1RioPFXqA8LLo56mY",
          "price_1Jn2pPB1RioPFXqAE6j2fkY6",
          "price_1Jn2pPB1RioPFXqAOSCCj1ty",
          "price_1Jn2pPB1RioPFXqAXTNnPBD7",
          "price_1Jn2pPB1RioPFXqAyQn1zSAX"
        ],
        [
          "price_1Jn2qjB1RioPFXqALHrPTSNt",
          "price_1Jn2qjB1RioPFXqASvYpszrC",
          "price_1Jn2qjB1RioPFXqAdNjzVFDT",
          "price_1Jn2qjB1RioPFXqAuSuiRcSH",
          "price_1Jn2qjB1RioPFXqA2VvvRuSB"
        ],
        [
          "price_1Jn2rgB1RioPFXqAyH7erPx1",
          "price_1Jn2rgB1RioPFXqAIa7nVPEz",
          "price_1Jn2rgB1RioPFXqAMUIEOqXk",
          "price_1Jn2rgB1RioPFXqA53aoLVuF",
          "price_1Jn2rgB1RioPFXqAOEvL4O1r"
        ]
      ];
      var data = {
        priceId,
        priceLink
      };

      
      var nums = [];
      for (var i = 0; i < 12; i++) {
        var num = Math.floor(Math.random() * 4);
        nums.push(num);
      }
      
      var price_link_id = [];
      for (i in priceId) {
        var num = nums[i];
        var price = priceId[i][num];
        var link = priceLink[i][num];
        price_link_id.push({price, link, paid: false});
      }
      try {
        const res1 = await API.stripeadd({prices: price_link_id}, token);
      } catch (err) {
        console.log(err);
      }
    }
  },
  async mounted() {
    const token = window.localStorage.getItem("token");
    try {
<<<<<<< HEAD
      const result = await API.stripe(token);
      this.isLoading = true;

      this.table1.data = result.data.extracted;
    } catch (error) {}
=======
      const result = await API.stripe(token)
      this.table1.data = result.data.extracted
    } catch (error) {
      console.log(error);
    }
>>>>>>> b95be7a7060ace39f218b3457af1c3b4c3e49f0a
  }
};
</script>

<style lang="scss" scoped>
button {
  border-radius: 10px;
  text-align: center;
  margin: auto;
}
.relative{
  position: relative;
}
.loader{
  position: absolute;
  top: 150%;
  left: 37%;
}
</style>
