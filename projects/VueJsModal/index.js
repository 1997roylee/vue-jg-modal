import VueJsModal from "./VueJsModal.vue";

const component_name = 'VModal';

const styles = {}

const Plugin = {
    install(Vue, options = {}) {
        this.event = new Vue();

        Vue.prototype.$VModal = {
            show: (name) => {
                // Open the Modal
                this.event.$emit('toggle', name, true)
            },
            hide: (name) => {
                // Close the Modal
                this.event.$emit('toggle', name, false)
            },

            options() {
                return Object.assign({}, styles, options)
            }
        }

        // Vue.directive('dialog-bottom', (el, binding, node) => {
        //     console.log(node);
        //     // this.el.target.innerHTML = "";
        //     el.innerHTML = "abc";
        // });

        Vue.component(component_name, VueJsModal);
    }
};

export default Plugin;