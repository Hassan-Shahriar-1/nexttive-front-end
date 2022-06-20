<template>

    <div>
      <div v-if="msg!=''"><h5>{{msg}}</h5></div>
      <div v-if="edit!=false">
        <admin-edit :post_id="edit_id"></admin-edit>
        </div>
<table class="table border" v-else>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Category</th>
      <th scope="col">Description</th>
      <th scope="col">Created_at</th>
      <th scope="col">Updated_at</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
  <tbody>
    <tr v-for="(data,i) in post_data" :key="i">
      <th scope="row">1</th>
      <td>{{data.title}}</td>
      <td>{{data.description}}</td>
      <td>{{data.category}}</td>
      <td>{{data.created_at}}</td>
      <td>{{data.updated_at}}</td>
      <td><div class="row"><button class="col-6 ml-1 btn btn-danger" @click="delete_post(data.id)">Delete</button> <button class="col-4 ml-1 btn btn-success" @click="edit_post(data.id)">Edit</button></div></td>
      
    </tr>
    
  </tbody>
</table>
        </div>
        
</template>

<script>
export default{
  data() {
    return {
      post_data:'',
      edit:false,
      edit_id:'',
      msg:''
    }
  },
  created() {
    this.getdata()
  },
   
  
  methods: {
    delete_post(pid){
      this.axios.get('/posts/delete/'+pid).then((res)=>{
        if(res.sts=='post_deleted'){
          this.getdata()
        }
          this.msg=res.msg
        
        
      })
    },
    getdata(){
       this.axios.get('/post/list').then((res)=>{
      if(res.sts=='post_data'){
        this.post_data=res.data
      }
    })

    },
    edit_post(pid){
      this.edit_id=pid,
      this.edit=true

    }
    

  },
}
</script>