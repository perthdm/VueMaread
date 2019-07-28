import Topbar from '../../components/Topbar/Topbar.vue'
import axios from 'axios'

export default {
    name: "DetailBook",
    components: {
        Topbar
    },
    data: function() {
        return {
           EbookDetail : [],
           Rating: [],
           BlackStarArray : []
        };
    },
    created:function(){
        // console.log(this.$route.params.id);
        axios.post("https://ebook.mareads.com/api/get/ebook" , {id : this.$route.params.id}).then((res)=>{
            res.data.updated_at = res.data.updated_at.substring(0,10)
            this.EbookDetail = res.data
            this.Rating = Array.from({ length: this.EbookDetail.PointFloat }, (v, k) => k + 1);
            this.BlackStarArray = Array.from({ length: 5-this.Rating.length }, (v, k) => k + 1);
        })
    },
    methods: {
        ReadEbook:function(){
            console.log("id Ebook : "+this.EbookDetail.id );
            console.log("file PDF : "+this.EbookDetail.file );
            this.$router.push('/readbook')
            
        },
        Download:function(){
            
            console.log("Download");
            
        },

        Share:function(){
            console.log("Share");
            
        }
    },


}