import Topbar from '../../components/Topbar/Topbar.vue'
import Content from '../../components/Content/Content.vue'
import firebase from 'firebase'
import swal from 'sweetalert'

export default {
    name: "ChangePassword",
    components: {
        Topbar,
        Content
    },
    data: function () {
        return {
            user: {
                oldPassword: "",
                newPassword: "",
                confirmPassword: ""
            },
            email: localStorage.getItem('email')
        };
    },
    methods: {
        ChangePassword() {
            if (this.user.oldPassword == "" || this.user.newPassword == "" || this.user.confirmPassword == "") {
                swal({ title: "ลองใหม่อีกครั้ง", text: "กรุณากรอกข้อมูลให้ครบถ้วน", icon: "error", button: "OK", });
            }else if(this.user.newPassword != this.user.confirmPassword ){
                swal({ title: "ลองใหม่อีกครั้ง", text: "กรุณากรอกรหัสผ่านให้ตรงกัน", icon: "error", button: "OK", });
            } 
            else {
                firebase.auth().signInWithEmailAndPassword(this.email , this.user.oldPassword).then(()=>{
                    let userFirebase = firebase.auth().currentUser

                    userFirebase.updatePassword(this.user.newPassword).then(()=>{
                        swal({ title: "สำเร็จ", text: "เปลี่ยนรหัสผ่านสำเร็จ", icon: "success", button: "OK", }).then(()=>{
                            this.$router.push({path : '/'})
                        })
                    })
                }).catch(()=>{
                    swal({ title: "ลองใหม่อีกครั้ง", text: "รหัสผ่านเก่าไม่ถูกต้อง" , icon: "error", button: "OK", })
                })
            }
        }
    },


}