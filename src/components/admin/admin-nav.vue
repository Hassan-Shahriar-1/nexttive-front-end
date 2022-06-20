<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Dashboard</a>
      <button type="button"
              class="navbar-toggler navbar-toggler-right"
              
              aria-controls="navigation-index"
              aria-expanded="false"
              aria-label="Toggle navigation"
             >
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
        <span class="navbar-toggler-bar burger-lines"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="nav navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" data-toggle="dropdown">
              <i class="nc-icon nc-palette"></i>
            </a>
          </li>
         
          
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Account
            </a>
          </li>
          
          <li class="nav-item">
            <a href="#" class="nav-link" @click="logout()">
              Log out
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  export default {
    
    data () {
      return {
        activeNotifications: false
      }
    },
     methods: {
         logout(){
            this.axios.post('/logout').then((res)=>{
                if(res.sts=='logout'){
                    window.localStorage.setItem('Usrtkn',null)
                    this.axios.defaults.headers.Authorization=null
                    this.$router.push('/')
                }
            })
        }
      
     }
  }

</script>

