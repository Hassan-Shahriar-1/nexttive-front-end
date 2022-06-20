<template>
    <div>
        <div v-if="login==true">
        <admin-login></admin-login>
        </div>
        <div v-else><admin-dashboard></admin-dashboard></div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            login:false,
           
        }
    },
    mounted(){
        this.login
    },
    created(){
        console.log(this.login)
        console.log(this.axios.defaults.headers.Authorization);
        if(this.axios.defaults.headers.Authorization === 'Bearer null'  || this.axios.defaults.headers.Authorization===null){
            this.login=true
            
        }else{
            this.login=false
            
        }
    },
    methods: {
        
    },
}

</script>