<template>
  <div class="row">
    <div class="col-12">
      <card :title="table1.title">
        <div class="table">
          <base-table
            :data="posts"
            :columns="table1.columns"
            thead-classes="text-primary"
          >
          </base-table>
        </div>
      </card>
    </div>
    <div class="container h">
      <button
        type="button"
        class="btn-outline-primary mr-1 navigation"
        v-for="index in pages"
        :key="index"
        @click="next(index)"
      >
        {{ index }}
      </button>

      <button type="button" class="btn-outline-primary mr-1 navigation" @click="addone">></button>
    </div>
  </div>
</template>

<script>
import { BaseTable } from "@/components";
const tableColumns = ["Thread", "Username", "Replies"];

export default {
  components: {
    BaseTable
  },
  data() {
    return {
      table1: {
        title: "Forum Discussion",
        columns: [...tableColumns],
        data: [
          {
            id: 1,
            thread: "why is my gas bill so high?",
            username: "kendricklamar",
            replies: "7"
          },
          {
            id: 2,
            thread: "which appliances to use less to save water?",
            username: "angela",
            replies: "15"
          },
          {
            id: 3,
            thread: "how do I pay my bills on this application?",
            username: "carlbruner",
            replies: "3"
          },
          {
            id: 5,
            thread: "Can I save more electricity by increasing the temperature of the air-con? ",
            username: "timotheechalamet",
            replies: "5"
          },
          ,
          {
            id: 6,
            thread: "I can't find my bill? ",
            username: "arianagrande123",
            replies: "27"
          }
          ,
          {
            id: 7,
            thread: "How can I save more electricity? ",
            username: "doraemon66",
            replies: "88"
          }
          ,
          {
            id: 8,
            thread: "Can I pay my bill on the application? ",
            username: "harrystyles",
            replies: "51"
          }
          ,
          {
            id: 9,
            thread: "What are the payment methods available on this platform? ",
            username: "tomhiddleston",
            replies: "3"
          }
          ,
          {
            id: 10,
            thread: "I have save 30% of my total bill thanks to this app! Will share with my friends about UT Buddy! ",
            username: "makkie",
            replies: "10"
          }
          ,
          {
            id: 11,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 12,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 13,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 14,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 15,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 16,
            thread: "is the app accurate? ",
            username: "",
            replies: "9"
          }
          ,
          {
            id: 17,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
        ],
        
      },
      page: 1
    };
  },
  computed: {
    pages() {
      
      var no_pages = Math.ceil(this.table1.data.length / 10);
      
      return no_pages;
    },
    posts(){
      var end = this.page * 10;
      
      return this.table1.data.slice(end-10, end+1)
    }
  },
  methods:{
    next(index){
      this.page = index
    },
    addone(){
      this.page += 1
    }
  }
};
</script>

<style lang="scss" scoped>
.h {
  text-align: center;
  margin: 5px;
}
.navigation{
  cursor: pointer;
}
</style>
