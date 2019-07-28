import Logo from '../../components/Logo/Logo.vue'
import Menu from '../../components/Menu/Menu.vue'
import Slidebar from '../../components/Slidebar/Slidebar.vue'
import Content from '../../components/Content/Content.vue'
import axios from 'axios'

export default {
    name: "Book",
    components: {
        Logo,
        Menu,
        Slidebar,
        Content
    },
    data: function () {
        return {
            EbookArray: [],
            CategoryArray: []
        }
    }, created: function () {
       
        axios.post('https://ebook.mareads.com/api/user/ebook/getLibraly',{ uid: localStorage.getItem('uid') }).then((res) => {
            this.EbookArray = res.data
            console.log(this.EbookArray);

        })
    },
    methods: {
        viewEbook:function(ebook){
            // console.log(ebook.id);
            
            this.$router.push({path : "/detailbook/"+ebook.id})
            
        }
    }


}