<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table">
            <base-table :data="table1.data"
                        :columns="table1.columns"
                        thead-classes="text-primary">
            </base-table>
          </div>
        </card>
      </div>
      <div class="container h">
      <button type="button" class="btn-outline-primary mr-1">1</button>
      <button type="button" onclick = "/Community2.vue" class="btn-outline-primary mr-1">2</button>
      <button type="button" class="btn-outline-primary mr-1">></button>
      </div>
    </div>
</template>

<script>
import { BaseTable } from "@/components";
const tableColumns = ["Thread", "Username", "Replies"];
const tableData = [
    {
    id: 1,
    thread: "why is my gas bill so high?",
    username: "kendricklamar",
    replies: "7",
    
  },
  {
    id: 2,
     thread: "which appliances to use less to save water?",
    username: "angela",
    replies: "15",
  },
  {
    id: 3,
    thread: "how do I pay my bills on this application?",
    username: "carlbruner",
    replies: "3",
  },
  {
    id: 4,
    thread: "is the app accurate? ",
    username: "david",
    replies: "9",
  }
  ];


    export default {
        components: {
            BaseTable
        }, 
    data() {
    return {
      table1: {
        title: "Forum Discussion",
        columns: [...tableColumns],
        data: [...tableData]
      }
    };
  }
    }; 
</script>

<style lang="scss" scoped>

.h{
    text-align: center;
    margin: 5px;

}



</style>