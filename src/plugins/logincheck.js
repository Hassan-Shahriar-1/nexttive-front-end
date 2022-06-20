export default {
    lgnchk : (rt) => { // login Check // 
        //onsole.log(rt)
        //let jttkn= window.localStorage.getItem("Usrtkn");
        if(rt.axios.defaults.headers.Authorization == null || rt.axios.defaults.headers.Authorization=='Bearer '+null){
            rt.$router.go(rt.$router.currentRoute);
        }  
    }
}