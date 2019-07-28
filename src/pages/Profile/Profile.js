import Topbar from '../../components/Topbar/Topbar.vue'
import Content from '../../components/Content/Content.vue'
import axios from 'axios'
import swal from 'sweetalert'

export default {
    name: "Profile",
    components: {
        Topbar,
        Content
    },
    data: function () {
        return {
            Profile: {
                firstname: localStorage.getItem('firstname'),
                lastname: localStorage.getItem('lastname'),
                email: localStorage.getItem('email'),
                displayname: localStorage.getItem('displayname'),
                birthday: localStorage.getItem('birthday'),
                photoURL: localStorage.getItem('photoURL'),
                phone: "-",
            }

        };
    },
    created: function () {
        if (localStorage.getItem('phone') != 'null' || localStorage.getItem('phone') == undefined) {
            this.Profile.phone = localStorage.getItem('phone')
        }
    },
    methods: {
        edit: function () {
            if (document.getElementById('test').innerHTML == "แก้ไข") {
                document.getElementById('test').innerHTML = "บันทึก"

                for (let i = 0; i < document.getElementsByClassName('box1').length; i++) {
                    document.getElementsByClassName('box1')[i].removeAttribute('readonly')
                }

            } else if (document.getElementById('test').innerHTML == "บันทึก") {
                axios.post("https://ebook.mareads.com/api/user/member/updatemember", {
                    uid: localStorage.getItem('uid'),
                    firstname: this.Profile.firstname,
                    lastname: this.Profile.lastname,
                    email: this.Profile.email,
                    displayname: this.Profile.displayname,
                    birthday: this.Profile.birthday,
                    phoneNumber: this.Profile.phone
                }).then(() => {
                    localStorage.setItem('firstname', this.Profile.firstname)
                    localStorage.setItem('lastname', this.Profile.lastname)
                    localStorage.setItem('displayname', this.Profile.displayname)
                    localStorage.setItem('birthday', this.Profile.birthday)
                    localStorage.setItem('phone', this.Profile.phone)

                    swal({ title: "สำเร็จ", text: "แก้ไขข้อมูลสำเร็จ", icon: "success", button: "OK", }).then(()=>{
                        this.$router.push({path : '/'})
                    })
            
                }).catch((err)=>{
                    swal({ title: "ลองใหม่อีกครั้ง", text: err.message , icon: "error", button: "OK", })
                })


            }
        },
        
    },


}








