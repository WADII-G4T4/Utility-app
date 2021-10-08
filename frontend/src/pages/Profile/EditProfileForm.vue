<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input
          label="Username"
          placeholder="Username"
          v-model="model.username"
        >
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input
          label="Email address"
          type="email"
          placeholder="mike@email.com"
        >
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input
          label="First Name"
          v-model="model.firstName"
          placeholder="First Name"
        >
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input
          label="Last Name"
          v-model="model.lastName"
          placeholder="Last Name"
        >
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input
          label="Address"
          v-model="model.address"
          placeholder="Home Address"
        >
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="City" v-model="model.city" placeholder="City">
        </base-input>
      </div>
      <div class="col-md-4 px-md-1">
        <base-input
          label="Country"
          v-model="model.country"
          placeholder="Country"
        >
        </base-input>
      </div>
      <div class="col-md-4 pl-md-1">
        <base-input label="Postal Code" placeholder="ZIP Code"> </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8">
        <base-input>
          <label>Tips</label>
        </base-input>
        <ul>
          <li v-for="(tip, index) in tips" :key="index">
            <textarea
              rows="3"
              cols="80"
              class="form-control"
              placeholder="Key in any relevant tips"
              v-model="tip.words"
            >
            </textarea>
          </li>
        </ul>

        <button @click="addTip" class="btn btn-black btn-sm">
          <i class="tim-icons icon-simple-add add"></i>
        </button>
      </div>
    </div>
    <base-button slot="footer" type="primary" fill @click="save">Save</base-button>
  </card>
</template>
<script>
import API from '../../api/API'
export default {
  props: {
    model: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      tips: [
        {
          words: "Save water",
          
        }
      ]
    };
  },
  mounted(){
    const token = window.localStorage.getItem("token");
    API.findTip(token).then(res=>{
      this.tips = res.data[0].tips
      
    }).catch(err=>{
      console.log(err)
    })
  },
  methods: {
    addTip() {
      this.tips.push({words: ""})
    },
    async save(){
      const token = window.localStorage.getItem("token");
      try {
        const res = await API.addTip({tips: this.tips}, token)
      } catch(err){
        console.log(err)
      }
    }
  }
};
</script>
<style>
.add {
  color: white;
}
</style>
