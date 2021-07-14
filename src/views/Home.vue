<template>
<div>
  <div class="search">
         <h1 >Search</h1>
         <input v-model="search" type="text" class="searchcontent" />
  </div>
 <div class="home">
    <HelloWorld/>
      <div class="user" v-for="(showuser) in filtered" :key="showuser.id"
         @click="gotoUserDetailPage(showuser.id)">
         <div class="image">
            <img :src="showuser.avatar" alt="" >
         </div>
           <div class="text">
               <h1>{{showuser.name}}</h1>
               <p>{{showuser.phoneNumber}}</p>
           </div>
       </div>
 </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data(){
      return{
        search: "",
      };
  },
  computed: {
      users() {
         return this.$store.state.users;
      },
      filtered() {

         return this.users.filter((user) => {
            return (
               user.name.toLowerCase().includes(this.search.toLowerCase())  
            );
         });
      },
   },
 methods:{
   gotoUserDetailPage(id){
     this.$router.push(`/user/${id}`)
   }  
 },
}
</script>
<style scoped>
.home{
    width: 72vw;
    display: flex;
   flex-wrap: wrap;
   width: 100%;
   justify-content: space-around;
    box-sizing: border-box;
    margin-left: 10%;
}
.user {
  display: block;
  margin-bottom: 20px;
  transition: ease-in-out 0.5s;
}
.user:hover{
  transform: scale(1.1);
   cursor: pointer;
}
img{
  width: 80%;
  border-radius: 50%;
  margin: 25px;
}
.image{
  margin: 10px 35px 10px 0px;
  height: 240px;
  width: 240px;
  background: rgb(255, 241, 212);
  border-radius: 30px;
}
.image:hover{
  background: white;
}
.text{
  margin-top: 50px;
  text-align: center;
}
h1{
  font-size: 25px;
}
.search{
  width: 500px;
  height: 100px;
  margin-left: 35%;
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
}
.searchcontent{
  width: 400px;
  height: 20px;
  border: 2px solid black;
  transition: ease 0.4s;
  font-family: 'Courier New', Courier, monospace;
}
</style>