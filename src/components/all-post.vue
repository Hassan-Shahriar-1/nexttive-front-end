<template>

    <div>

        <div class="container">
  
        <h2 class="text-center">Post List </h2>
        
        <div class="row" v-if="postlist!=''">
        <div class="list-group col-10">
          <div href="#" class="list-group-item border rounded py-4 bg-second my-2" v-for="(plist,i) in postlist" :key="i">
                <div class="row">
                <h6 class="text-center col-9 float-left">{{plist.title}}</h6>
                    <p class="col-3">{{plist.created_at}}</p>
                </div><hr>
            <p>{{plist.description}}</p>
            </div>
          
        </div>
        <div class="col-2">
            <div class="card">
                <h6 class="text-left text-info">category list</h6>
            <div class="card  text-center"  v-for="(category,i) in cat" :key="i" @click="load_content(category.name)">{{category.name}}</div>
            </div>
        </div>
        </div>
        <div v-else class="row"><h5 class="text-danger col-10">sorry no data found</h5>
        <div class="col-2">
            <div class="card">
                <h6 class="text-left text-info">category list</h6>
            <div class="card  text-center"  v-for="(category,i) in cat" :key="i" @click="load_content(category.name)">{{category.name}}</div>
            </div>
        </div>
        </div>
      
        
     
        
      </div>


    </div>
</template>
<script>
export default{
    props:{
        postlist:{
            type:Array,
            required:true
        }
    },
    data() {
        return {
            allpost:'',
            cat:'',
        }
    },
    beforeCreate() {
        this.axios.get('/category/list').then((res)=>{
            if(res.sts=='cat-data'){
                this.cat=res.data
            }
        })
    },
    methods: {
        load_content(name){
            this.axios.get('/post/'+name).then((res)=>{
                if(res.sts=='found'){
                    this.$props.postlist    =res.data
                }else{
                    this.$props.postlist=''
                }
            })
        }
    },
    
   
}

</script>