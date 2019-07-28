export default {
    name: "Menu",
    props: {
        color: String,
        active:String,
    },
    data:function() {
        return {
            tabs:{
                fiction:"",
                book:"",
                history:"",
                store:"",
                contect:"",
            },
            activeTabs: this.active
        }
       
    },
    mounted: function() {
        this.tabs[this.activeTabs] = '#9d2e2e';
        
        
    },
    methods: {
        getUser:function () {
           
        }
    },
}