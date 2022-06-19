export default {
    lgnchk : (rt) => { // login Check // this.gm.lgnchk(this);

        rt.sktd.tmr = '';
        rt.sktd.sts = false;
        //let jttkn= window.localStorage.getItem("Usrtkn");
        if(rt.axios.defaults.headers.Authorization == null){
            rt.$router.go();
        }  
    }
}