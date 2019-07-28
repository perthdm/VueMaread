export default {
    name: "Slidebar",
    props: {
        color: String
    },
    data: function() {
        return {
            displayname: localStorage.getItem('displayname'),
            email: localStorage.getItem('email'),
            photoURL: localStorage.getItem('photoURL')
        };
    },
    created: function() {
       
    },
    methods: {
        logout: function() {
            localStorage.clear()
            this.$router.push({ path: '/login' })
        },
        profilePage: function() {
            this.$router.push({ path: '/profile' })
        },
        changePasswordPage: function() {
            this.$router.push({ path: '/changepassword' })
        },
        contectPage: function() {
            this.$router.push({ path: '/contect' })
        },
        provisionPage: function() {
            this.$router.push({ path: '/provision' })
        },
        settingPage: function() {
            this.$router.push({ path: '/setting' })
        }
    },

}