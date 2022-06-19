<template>
    <div >
        <div>
            <Header></Header>
        </div>
    <h1 class="text-danger">ok</h1>
    
    <div>
        <footerVue></footerVue>
    </div>
    </div>
</template>
<script>
import footerVue from './footer.vue'
import Header from './header.vue'
export default{
    components:{
    footerVue,
    Header,
},
data() {
    return {
        post_data:'',
        
    }
},
beforeCreate() {
    this.axios.get('/post/list').then((res)=>{
        console.log('here is the log ')
        if(res.sts='post_data'){
        this.post_data=res.data
        }
    })


}
}

</script>