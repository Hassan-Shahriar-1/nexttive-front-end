<template>
<div>

<h1 class="mt-5" v-if="form==false">No data Found</h1>
<div >
    <div v-if="msg!=''"><h1 class="text-success">{{msg}}</h1></div>

        <div class="container mt-4 mb-4">
    <div class="row justify-content-md-center mt-5">
        <div class="col-md-12 col-lg-8">
            <h1 class="h2 mb-4  text-center">Submit issue</h1>
            <div class="form-group">
                <label for="name">Post Title</label>
                <input type="text" :value="data.title" class="form-control" id="title" />
            </div>

            <div class="form-group">
              <label for="email">description</label>
              <textarea class="form-control" id="description" :value="data.description" ></textarea>
              
            </div>

            <div class="form-group">
              <label>Secelet Category</label>
              <select  @change="category($event)">
                <option value="">select any category</option>
                <option v-for="(data,i) in db_cat" :key="i" :value="data.name">{{data.name}}</option>
              </select>
              <div v-if="categories!=''"><div v-for="(cat,i) in categories" :key="i"><p class="rounded"><i class="bi bi-x " @click="remove(i)"></i>{{cat}}</p></div></div>
            </div>

            <div class="form-group row">
                <div class="col-6">
                <label for="phone">Active</label>
                <input type="radio" v-model="sts" class="form-control" value="0" id="phone" placeholder=""/>
                </div>
                <div class="col-6">
                <label for="phone">Deactive</label>
                <input type="radio" v-model="sts" class="form-control" value="1" id="phone" placeholder=""/>
                </div>
            </div>

            <hr>

        <div class="col-12 text-center">
            <button  class="btn text-center btn-primary" @click="post_update(post_id)">Update Now</button>
        </div>
        </div>
    </div>
    </div>
</div>
</div>
</template>
<script>
export default{
    props:{
        post_id:{type:Number,required:true}
    },
    data() {
        return {
            form:false,
            data:'',
            sts:'',
            categories:[],
            db_cat:'',
            msg:'',
        }
    },
    beforeCreate() {
        this.axios.get('/category/list').then((res)=>{
                if(res.sts=='cat-data'){
                    this.db_cat=res.data
                }
            })
    },

    created() {
        console.log('props',this.$props['post_id'])
        this.axios.get('/posts/edit/'+this.$props['post_id']).then((res)=>{
            if(res.sts=='found'){
                this.form=true,
                this.data=res.data
                this.categories=res.data.category.split(' ')
                console.log('strin',this.categories)
            }
        })
    },
    methods: {
         post_update(pid){
              let dtl= document.getElementById("description").value 
              let tl=document.getElementById("title").value 
                this.axios.post('/posts/update/'+pid,{'title':tl,'description':dtl,'sts':this.sts,'categories':this.categories}).then((res)=>{
                    if(res.sts=='updated'){
                        this.msg=res.msg
                    }
                })
            },
            category(event){
                let val=event.target.value
                if(this.categories.includes(val)==false){
                    this.categories.push(val)
                }
                
                console.log(this.categories)
            },
            remove(i){
                this.categories.splice(i,1)
            }
    },
}
</script>