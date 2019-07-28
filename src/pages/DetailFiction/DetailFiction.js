import Topbar from '../../components/Topbar/Topbar.vue'
import axios from 'axios'

export default {
    name: "DetailFiction",
    components: {
        Topbar
    },
    data: function () {
        return {
            FictionChapter: [],
            FictionDetail: [],
            FictionReview: [],
            Rating: [],
            BlackStarArray: []
        }
    },
    created: function () {

        axios.post("https://ebook.mareads.com/api/chapter/" + this.$route.params.id).then((res) => {

            this.FictionDetail = res.data.fiction
            this.FictionChapter = res.data.chapters
            this.FictionReview = res.data.reviews
            this.Rating = Array.from({ length: this.FictionDetail.rating }, (v, k) => k + 1);
            this.BlackStarArray = Array.from({ length: 5 - this.Rating.length }, (v, k) => k + 1);
         
        })


    },
    methods: {
        readFiction(id) {
            this.$router.push('/readfiction/' + id)
        },

        StartReadFiction() {
            this.$router.push('/readfiction/' + this.FictionChapter[0].id)
        }
    },


}