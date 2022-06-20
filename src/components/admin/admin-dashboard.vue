<template>
    <div>
        <div class="bg-dark">
        <admin-nav></admin-nav>
        </div>


                <div class="row Gp0m0">
            <div class="col-3 p-0 mndvclr  rounded card" style="min-height:100vh">
                    <div style="height:100%">


                <div class="card-header   px-0 py-3 bg-dark text-white ">Post &nbsp;&nbsp; <i @click="menu ^= true" class=" float-right fa-solid fa-angle-down"></i> </div>
        
               
               <div class="card-body p-1 " v-show="menu" style="height:auto;">
                    <div class="dvclr rounded p-3 my-2" @click="load_component('ad_post_list')">List</div>
                    <div class="dvclr rounded p-3 my-2" @click="load_component('ad_post_Create')">Create</div>
                  
                </div>
                 <div class="card-footer   px-0 py-3 bg-dark text-white " @click="load_component('category')">Category &nbsp;&nbsp;  </div>
                       <hr class="m-0">
            </div>
            </div>

            <div class="col-9">
                    <div v-if="comp['category']==true">
                        <category-page></category-page>
                    </div>
                    <div v-else-if="comp['ad_post_list']==true">
                    <post-list-admin></post-list-admin>
                    </div>
                    <div v-else-if="comp['ad_post_Create']==true">
                    <create-post></create-post>
                    </div>
                    <div v-else>
                        <h1>home page</h1>
                    
                    </div>
            </div>

        </div>
    </div>


    
    

</template>
<style scoped>
    @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css);

@import url(https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css);

.dvclr{
    background: rgb(34, 26, 26);
background: linear-gradient(180deg, rgba(245,244,244,1) 0%, rgba(250,250,250,1) 48%, rgba(240,240,240,1) 100%);
}

.mndvclr{
    background: rgb(89,89,89);
background: linear-gradient(180deg, rgb(207 207 207) 0%, rgb(207 207 207) 48%, rgba(240,240,240,1) 100%);
}


.hdrclr{
   background: #a9a9aa;
}
.Gp0m0{
    padding: 0px;
    margin:0px;
}
</style>
<script>

export default{
    data() {
        return {
            login:false,
            menu:false,
            comp: {
                ad_post_list: false,
                ad_post_Create: false,
                category:false
            }

        }
    },
    created() {
     
        
   
     
    },
    methods: {
       load_component(val){
            Object.keys(this.comp).forEach(el => {
                if (el != val) {
                    this.comp[el] = false;
                }
                else {
                    this.comp[el] = true;
                }
            });
       }
      
    },

    
}

</script>