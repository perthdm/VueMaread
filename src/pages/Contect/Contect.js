import Logo from '../../components/Logo/Logo.vue'
import Menu from '../../components/Menu/Menu.vue'
import Topbar from '../../components/Topbar/Topbar.vue'
import Slidebar from '../../components/Slidebar/Slidebar.vue'
import Content from '../../components/Content/Content.vue'

import axios from 'axios'
import swal from 'sweetalert'

export default {
    name: "Contect",
    components: {
        Logo,
        Menu,
        Slidebar,
        Topbar,
        Content
    },
    data: function () {
        return {
            topic: "ระบุปัญหา",
            email: "",
            phone: "",
            detail: ""
        };
    },
    methods: {
        sendReport: function () {
            if (this.topic == "ระบุปัญหา" || this.email == "" || this.phone == "" || this.detail == "") {
                swal({ title: "Try again", text: "กรุณากรอกข้อมูลให้ครบถ้วน", icon: "error", button: "OK", });
            } else {
                axios.post('https://ebook.mareads.com/api/user/member/contact', {
                    uid: localStorage.getItem('uid'),
                    title: this.topic,
                    mail: this.email,
                    tel: this.phone,
                    detail: this.detail
                }).then(() => {

                    swal({ title: "Success", text: "ส่งรายงานสำเร็จ", icon: "success", button: "OK", }).then(() => {
                        this.toppic = "";
                        this.email = "";
                        this.phone = "";
                        this.detail = "";
                    });

                }).catch(function (error) {
                    swal({ title: "Try again", text: error.message, icon: "error", button: "OK", });
                })

            }
        }

    },


}