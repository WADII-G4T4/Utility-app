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
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          },
          ,
          {
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 4,
            thread: "is the app accurate? ",
            username: "david",
            replies: "9"
          }
          ,
          {
            id: 4,
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
