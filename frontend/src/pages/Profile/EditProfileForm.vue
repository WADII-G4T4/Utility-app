<template>
  <card>
    <h5 slot="header" class="title">Edit Profile</h5>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input
          label="Email address"
          type="email"
          placeholder="mike@email.com"
          v-model="email"
          disabled
        >
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 pr-md-1">
        <base-input
          label="First Name"
          v-model="firstName"
          placeholder="First Name"
        >
        </base-input>
      </div>
      <div class="col-md-6 pl-md-1">
        <base-input
          label="Last Name"
          v-model="lastName"
          placeholder="Last Name"
        >
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <base-input
          label="Address"
          v-model="address"
          placeholder="Home Address"
        >
        </base-input>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 pr-md-1">
        <base-input label="Postal Code" placeholder="ZIP Code" v-model="zip"> </base-input>
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
          <i class="tim-icons icon-simple-add add m-auto"></i>
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
      tips: [],
      firstName: null,
      lastName: null,
      address: null,
      zip: null,
      email: null
    };
  },
  async mounted(){
    const token = window.localStorage.getItem("token");
    try {
      const res = await API.findTip(token)
      const res1 = await API.findProfile(token)
      
      this.tips = res.data[0].tips
      const { name, address, zip, email } = res1.data[0]
      this.firstName = name.split(" ")[0]
      this.lastName = name.split(" ")[1]
      this.address = address;
      this.zip = zip;
      this.email = email
    } catch (error) {
      console.log(error)
    }
    
  },
  methods: {
    addTip() {
      this.tips.push({words: ""})
    },
    async save(){
      const token = window.localStorage.getItem("token");
      var name = this.firstName + ' ' + this.lastName
      var address = this.address;
      var zip = this.zip
      try {
        const res1 = await API.updateProfile( {name, address, zip}, token)
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
