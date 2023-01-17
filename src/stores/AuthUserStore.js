import { defineStore } from "pinia";
export const useAuthUserStore = defineStore("AuthUserStore", {
  state: () => {
    return {
      username: "Chico",
      nickname:'chi'
    };
  },
  // getters:{
  //   username : (state)=> state.username
  // },
  actions: {
    // visitTwitterProfile() {
    //   window.open(`https://twitter.com/${this.username}`, "_blank");
    // },
    updateData(){
      this.username = 'mingHua';
      this.nickname = 'Buti' 
      console.log('updated');
    }
  },
});
