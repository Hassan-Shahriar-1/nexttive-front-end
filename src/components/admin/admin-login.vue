<template>
<div>

        <div class="container">
<div class="row m-5 no-gutters shadow-lg">
<div class="col-md-6 d-none d-md-block">
<img src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" class="img-fluid" style="min-height:100%;" />
</div>
<div class="col-md-6 bg-white p-5">
<h3 class="pb-3  text-center">Login Form</h3>
<div class="form-style">

  <div class="form-group pb-3">    
    <input type="email" placeholder="Email" class="form-control" v-model="email" id="exampleInputEmail1"  aria-describedby="emailHelp">   
  </div>
  <div class="form-group pb-3">   
    <input type="password" placeholder="Password" class="form-control" v-model="password" id="exampleInputPassword1">
  </div>
  <div class="d-flex align-items-center justify-content-between">
<div class="d-flex align-items-center"><input name="" type="checkbox" value="" /> <span class="pl-2 font-weight-bold">Remember Me</span></div>

</div>
   <div class="pb-2">
  <button type="submit" class="btn btn-dark w-100 font-weight-bold mt-2" @click="login()">Admin</button>
   </div>

 
  
</div>

</div>
</div>
</div>




</div>


</template>

<script>
    export default{
        data() {
            return {
              email:'',
              password:''
                
            }
        },
        methods: {
            login(){
              this.axios.post('/login',{'email':this.email,'password':this.password}).then((res)=>{
                window.localStorage.setItem('Usrtkn',res.access_token) 
                this.axios.defaults.headers.Authorization = 'Bearer '+window.localStorage.getItem("Usrtkn");
                this.$router.go(this.$router.currentRoute)
              })
            }
        },
    }
</script>