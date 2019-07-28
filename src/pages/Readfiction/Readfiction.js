import Topbar from '../../components/Topbar/Topbar.vue'
import axios from 'axios'
import { async } from 'q';

export default {
    name: "Readfiction",
    components: {
        Topbar
    },
    data: function() {
        return {
            sepia: false,
            dark: false,
            bright: 0.5,
            DetailArray: [],
            fontsArr: ["Kanit", "Taviraj", "K2D", "Chakra_Petch", "Kodchasan"],
            contentStyle: {
                fontSize: '1rem'
            },
            contentClass: { 'sepia-mode': false, 'dark-mode': false, 'Kanit': true }
        };
    },
    created: function() {
        try {
            cordova.plugins.brightness.setBrightness(this.bright, res => {}, err => {});
        } catch (error) {

        }

        axios.post('https://ebook.mareads.com/api/get/chapter/' + this.$route.params.id).then((res) => {
            console.log(res.data);
            this.DetailArray = res.data
        })


    },
    methods: {
        modeChange: function(mode, event) {
            if (mode == "normal") {
                this.contentClass['sepia-mode'] = false
                this.contentClass['dark-mode'] = false
            } else if (mode == "dark") {
                this.contentClass['sepia-mode'] = false
                this.contentClass['dark-mode'] = true
            } else {
                this.contentClass['sepia-mode'] = true
                this.contentClass['dark-mode'] = false

            }
        },
        fontSize: function(e) {
            this.contentStyle.fontSize = e.target.value + 'rem';
        },
        fontChange: async function(e) {
            this.fontsArr.forEach(f => this.contentClass[f] = false);
            this.contentClass[e.target.value] = true;
            this.$forceUpdate();
        },
        brightChange: function(e) {

            this.bright = parseFloat(e.target.value);
            cordova.plugins.brightness.setBrightness(this.bright, res => {}, err => {});
        },

        Back(){
            this.$router.push('/detailfiction/' + this.DetailArray.fiction_id)
        }
    }


}