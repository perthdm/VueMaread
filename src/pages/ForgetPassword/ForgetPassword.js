import Logo from '../../components/Logo/Logo.vue'
import firebase from 'firebase'
import swal from 'sweetalert'

export default {
    name: "ForgetPassword",
    components: {
        Logo
    },
    data: function() {
        return {
            email: ""
        };
    },
    methods: {
        ForgetPassword: function() {
            if (this.eamil == "" || this.eamil == null) {
                swal({ title: "ลองใหม่อีกครั้ง", text: "กรุณากรอกอีเมล", icon: "error", button: "OK" });
            } else {
                firebase.auth().sendPasswordResetEmail(this.eamil).then(() => {
                    swal({ title: "สำเร็จ", text: "ระบบได้ทำการส่งข้อความไปยังอีเมลเรียบร้อยแล้ว", icon: "error", button: "OK" });
                }).catch((err) => {
                    swal({ title: "ลองใหม่อีกครั้ง", text: err.message, icon: "error", button: "OK" });
                })
            }


        }
    },
}