<template>
<div class="pt-3"> 
    <div class="pt-3" v-if="errmsg!=''"><h5 class="text-danger">{{errmsg}}</h5></div>
    <div class=" row no-gutters p-0 m-0">
    <div class="col-2"><label class="mt-2">CategoryName:</label></div>
    <div class="col-4"><input type="name" class="form-control" v-model="catname"/></div>
    <div class="col-2"><button class="btn btn-success" @click="catupload()">Add Category</button></div>
    
    <table class="table border mt-5" v-if="data!=''">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Created_at</th>
      <th scope="col">Updated_at</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(dt,i) in data " :key="i">
      <td scope="row">{{sl++}}</td>
      <td>{{dt.name}}</td>
      <td>{{dt.created_at}}</td>
      <td>{{dt.updated_at}}</td>
    </tr>
    
  </tbody>
</table>
<div v-else class="mt-5"><h5 class="text-center">No Data Found</h5></div>
    </div>
</div>

    
</template>
<script>
export default{
    data() {
        return {
            catname:'',
            data:'',
            sl:1,
            errmsg:'',
        }
    },
    

    created() {
        this.getdata()
    },
    
    methods: {
        catupload(){
            this.axios.post('/category/create',{'category_name':this.catname}).then((response)=>{
                console.log('error',response)
                if(response.sts=='alreday'){
                    this.errmsg=response.msg
                }else{
                    this.errmsg=''
                    this.getdata()
                }
            })
            
            
        },
        getdata(){
            this.axios.get('/category/list').then((res)=>{
            if(res.sts!='nodata'){
                this.data=res.data
            }
        })
        }
    },
}

</script>