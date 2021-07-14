<template>
 <div>
    <div class="info" >
      <img :src="user.avatar" alt="">
      <div class="infomation">
         <h1>{{user.name}}</h1>
         <p>{{user.phoneNumber}}</p>
         <p>Artificial Intelligence (AI) can be confusing. AI is a broad term that covers a wide range of applications, 
          and while we see AI technologies performing a swath of incredible feats such as Google Translate, AlphaGo, and solving a
          rubik's cube, it can be hard to tell which business problems AI is apt to solve. Matching a given problem to an AI solution
           often comes down to framing: sometimes what appears as an intractable problem can, with minor tweaks, become the kind of proble
           AI excels at solving.</p>
      </div>
    </div>
    <div class="form" >
         <div class="edit_form" v-if="isEdit">
            <h4 style="font-weight:100; margin-bottom:10px">Name</h4>
            <input  type="text" id="Text-input"  v-model="user.name">
               <h4 style="font-weight:100">PhoneNumber</h4>
               <input  type="text" id="Text-input"  v-model="user.phoneNumber">
         </div>
         <div class="button_ed">
            <td  class="td">
               <button  @click="isEdit = !isEdit" class="btton" >Edit</button>  
            </td>
            <td class="td">
               <button type="submit" @click="UpdateData()" style="margin-left:70px"  class="btton" >Save</button>
            </td>
            <button @click="deleteUsers(user)" class="btton"  style="width:78%">Delete</button>  
         </div>
    </div>  
 </div>
   
  
</template>

<script>
export default {
  name: 'userDetail',
  data(){
     return{
        id:this.$route.params.id,
        isEdit:0
     }
  },
  computed: {
     user() {
         let us = {}
         this.$store.state.users.forEach( user => {
            if(user.id == this.id)
               us = user;
         });
         return us;
      }
  },
   methods:{
      deleteUsers(user) {
          this.$store.commit('deleteUser',user)
          this.$router.push('/')
      },
      UpdateData() {
         this.$store.commit('editUser', this.user);
         alert("Updated");
      },
     },
}
</script>
<style scoped>
.info{
   width: 100%;
   height: 340px;
   display: flex;
}
.infomation{
   width: 60%;
   height: 200px;
   margin:6% 0px 0px 5%;
   display: block;
}
img{
  width: 30%;
  border-radius: 50%;
  margin: 25px;
}
.button_ed{
   display: block;
   width: 40%;
}
.form{
   display: flex;
}
.edit_form{
   width: 40%;
   margin-left: 20%;
}
.td{
   width: 400px;
}
#Text-input{
    width: 80%;
    padding: 8px 12px;
    background-color: transparent;
    border: 1px solid #191919;
    transition: all .15s ease;
}
.btton{
  width: 70%;
  height: 50px;
  margin: 40px 0px 0px 100px;
  font-weight: 700;
  background: white;
  border-radius: 10px;
  cursor: pointer;
  transition:all 0.8s ease-in-out ;
}
.btton:hover{
    background: rgb(242, 205, 243);
}
</style>