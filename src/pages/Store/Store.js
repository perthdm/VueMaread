import Logo from '../../components/Logo/Logo.vue'
import Menu from '../../components/Menu/Menu.vue'
import Slidebar from '../../components/Slidebar/Slidebar.vue'
export default {
    name: "Store",
    components: {
        Logo,
        Menu,
        Slidebar
    },
    data: function() {
        return {
            Text: "Mareads",
            Text2: "test"
        };
    }


}