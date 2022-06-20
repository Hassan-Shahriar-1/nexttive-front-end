<template>
    <div >
          <section id="header">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img class="logo horizontal-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/horizontal-logo.svg" alt="forecastr logo">
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" @click="render_components('post')">Home</a>
                  </li>
                  <li class="nav-item">
                   <router-link to="/admin"><a class="nav-link">Login</a></router-link> 
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Admin Section
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown2">
                      <a class="dropdown-item" href="admin-login.html">Adminlogin</a>
                      <a class="dropdown-item" href="admin-dashboard.html">AdminDashboard</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="admipostlist-table">Admin postlist table</a>
                    </div>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown3" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown3">
                      <button class="dropdown-item" href="#">Action</button>
                      <a class="dropdown-item" href="#">Another action</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                  </li>
                  
                </ul>
              </div>
            </div>
          </nav>
    </section>
        <div v-if="comp['post']==true">
        <all-post :postlist="post_data"></all-post>

        </div>
        
    
    <div>
          <section id="footer">


        <div class="footer navbar-dark bg-dark text-white fixed-bottom" >
            <p class="text-center">&copy;Copyright Reserved By <a href="hassanshahriar.info" style="color:azure; text-decoration:none;">Hassan Shahriar</a>
        </p>
        </div>

    </section>
    </div>
    </div>
</template>
<script>


export default{
    data() {
        return {
            post_data: '',
            logout:false,
            //admin:false,
            //post:false,
            comp: {
                post: false,
                admin: false,
            }
        };
    },
    beforeCreate() {
        this.axios.get("/post/list").then((res) => {
            console.log("here is the log ", res);
            if (res.sts == "post_data") {
                this.post_data = res.data;
            }
        });

         if(this.axios.defaults.headers.Authorization!='Bearer '+null){
          console.log('working',this.axios.defaults.headers.Authorization)
          this.logout=true
        }
        
    },
    created() {
        this.comp["post"] = true;
       
        //this.$check.lgnchk(this)
    },
    
    
    methods: {
        render_components(val) {
            console.log("value heeee", val);
            Object.keys(this.comp).forEach(el => {
                if (el != val) {
                    this.comp[el] = false;
                }
                else {
                    this.comp[el] = true;
                }
            });
        },
        logoutadmin(){
          this.axios.post('/logout').then((res)=>{
                console.log(res)
                if(res.message== 'User successfully signed out'){
                  window.localStorage.setItem('Usrtkn',null)
                  this.logout=false;
                  this.$router.go();
                  
                }
          })
        }
    },
    
}

</script>