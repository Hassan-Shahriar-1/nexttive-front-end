<template>

    <div>

        <div class="container">
  
        <h2 class="text-center">Post List with Badges</h2>
        
        
        <div class="list-group">
          <div href="#" class="list-group-item border rounded py-4 bg-second my-2" v-for="(plist,i) in postlist" :key="i">
                <div class="row">
                <h6 class="text-center col-9 float-left">{{plist.title}}</h6>
                    <p class="col-3">{{plist.created_at}}</p>
                </div><hr>
            <p>{{plist.description}}</p>
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
        }
    },
    
   
}

</script>