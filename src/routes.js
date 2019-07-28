import Home from './pages/Home/Home.vue';
import Register from './pages/Register/Register.vue';
import Login from './pages/Login/Login.vue';
import Contect from './pages/Contect/Contect.vue';
import Book from './pages/Book/Book.vue';
import History from './pages/History/History.vue';
import Store from './pages/Store/Store.vue';
import Readfiction from './pages/Readfiction/Readfiction.vue';
import ReadBook from './pages/ReadBook/ReadBook.vue';
import DetailFiction from './pages/DetailFiction/DetailFiction.vue';
import Setting from './pages/Setting/Setting.vue';
import DetailBook from './pages/DetailBook/DetailBook.vue';
import Profile from './pages/Profile/Profile.vue';
import Provision from './pages/Provision/Provision.vue';
import ChangePassword from './pages/ChangePassword/ChangePassword.vue';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword.vue';


const routes = [
    { path: '/', component: Home, meta: { Auth: true } },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/forgetpassword', component: ForgetPassword },

    { path: '/book', component: Book, meta: { Auth: true } },
    { path: '/history', component: History, meta: { Auth: true } },
    { path: '/store', component: Store, meta: { Auth: true } },
    { path: '/contect', component: Contect, meta: { Auth: true } },

    { path: '/detailfiction/:id', component: DetailFiction, meta: { Auth: true } },
    { path: '/readfiction/:id', component: Readfiction, meta: { Auth: true } },

    { path: '/detailbook/:id', component: DetailBook, meta: { Auth: true } },
    { path: '/readbook', component: ReadBook, meta: { Auth: true } },

    { path: '/setting', component: Setting, meta: { Auth: true } },
    { path: '/profile', component: Profile, meta: { Auth: true } },
    { path: '/provision', component: Provision, meta: { Auth: true } },
    { path: '/changePassword', component: ChangePassword, meta: { Auth: true } },
];



export default routes;