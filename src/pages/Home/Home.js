import Logo from '../../components/Logo/Logo.vue'
import Menu from '../../components/Menu/Menu.vue'
import Slidebar from '../../components/Slidebar/Slidebar.vue'
import Content from '../../components/Content/Content.vue'
import axios from 'axios'

export default {
  name: "Home",
  components: {
    Logo,
    Menu,
    Slidebar,
    Content
  },
  data: function () {
    return {
      FictionArray: [],
      CategoryArray: [],
      InputSearch: "",
      index: 12,
      ArrayColor: [],
      all: true,
      dataSearch: ""

    }
  },
  created: function () {
    // for (var i = 0; i < localStorage.length; i++) {
    //   console.log("Home :" + localStorage.getItem(localStorage.key(i)));
    // }
    axios.post('https://ebook.mareads.com/api/fiction').then((res) => {
      this.FictionArray = res.data
      console.log(this.FictionArray);

    })

    axios.post('https://ebook.mareads.com/api/fictioncategory').then((res) => {
      this.CategoryArray = res.data

    })

  },
  methods: {
    selectCategory: function (categoryID, index) {
      this.InputSearch = ""
      this.index = 12
      this.resetColor();

      if (categoryID == 'all') {
        this.all = true
      } else {
        this.all = false
        this.ArrayColor[index] = true
      }

      axios.post("https://ebook.mareads.com/api/getfictionbyindex", { val: categoryID, idx: 0, idxLimit: 12 }).then((res) => {
        this.FictionArray = res.data
      })
    },

    resetColor: function () {
      this.ArrayColor = [];
      this.CategoryArray.forEach(el => {
        this.ArrayColor.push(false);
      });
    },

    search: function () {
      // console.log(this.dataSearch);
      axios.post("https://ebook.mareads.com/api/searchfiction", { val: this.dataSearch, idx: 0, idxLimit: 12 }).then((res) => {
        this.FictionArray = res.data
      })
    },

    viewFiction:function(fiction){
      // console.log(fiction);
      this.$router.push({ path: "/detailfiction/"+fiction.id })
    }

  },
  mounted: function () {
    window.onscroll = (ev) => {
      if ((window.innerHeight + window.scrollY) >= document.getElementById("home-page").clientHeight) {
        console.log("bottom");

      }
    }
  },
  


}