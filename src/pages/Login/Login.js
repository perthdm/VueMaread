import '@/components/Firebase/firebaseInit';
import Logo from '@/components/Logo/Logo.vue'
import firebase from 'firebase'
import swal from 'sweetalert'
import axios from 'axios'
import { pleaseWait } from 'please-wait'
import 'please-wait/build/please-wait.css'

export default {
    name: "Login",
    components: {
        Logo
    },
    data: function () {
        return {
            email: 'prathza55@hotmail.com',
            password: '0817622582d',
            // pw:null
        };
    },
    methods: {
        login: function (e) {
            this.open();

            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                data => {
                    axios.post('https://ebook.mareads.com/api/user/member/getmemberdata', { uid: data.user.uid }).then((res) => {

                        localStorage.setItem('uid', res.data.uid)
                        localStorage.setItem('firstname', res.data.firstname)
                        localStorage.setItem('lastname', res.data.lastname)
                        localStorage.setItem('email', res.data.email)
                        localStorage.setItem('displayname', res.data.displayName)
                        localStorage.setItem('birthday', res.data.birthday)
                        localStorage.setItem('gender', res.data.gender)
                        localStorage.setItem('photoURL', res.data.photoURL)
                        localStorage.setItem('phone', res.data.phoneNumber)

                        // if(res.data.photoURL != null || res.data.photoURL != undefined){
                        //     localStorage.setItem('photoURL', res.data.photoURL)
                        // }else{
                        //     localStorage.setItem('photoURL', "")
                        // }

                        this.close();
                        this.$router.push({ path: "/" })
                    })
                }, err => {
                    swal({ title: "ลองใหม่อีกครั้ง", text: "อีเมล หรือ รหัสผ่านไม่ถูกต้อง", icon: "error", button: "ตกลง", });
                }
            );
            e.preventDefault();
        },

        open() {
            if (!this.pw) {
                
                this.pw = pleaseWait({
                    logo:  require('../../assets/imgs/MareadLoading.gif'),
                    backgroundColor: '#fff',
                    loadingHtml: '<p"> Mareads Application </p>'
                })
            }
        },

        close() {
            if (this.pw != null) {
                this.pw.finish()
                this.pw = null
            }
        }
    }

}