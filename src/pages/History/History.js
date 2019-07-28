import Logo from '../../components/Logo/Logo.vue'
import Topbar from '../../components/Topbar/Topbar.vue'
import Menu from '../../components/Menu/Menu.vue'
import Slidebar from '../../components/Slidebar/Slidebar.vue'
import Content from '../../components/Content/Content.vue'

export default {
    name: "History",
    components: {
        Logo,
        Menu,
        Slidebar,
        Topbar,
        Content
    },
    data: function() {
        return {
            Text: "Mareads",
            Text2: "test"
        };
    }


}