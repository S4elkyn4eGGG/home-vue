<script lang="ts">
    import { Vue } from 'vue-property-decorator';

    export default Vue.directive('click-outside', {
        bind: function (el: any, binding: any, vnode: any) {
            el.clickOutsideEvent = function (event) {
                if (!(el === event.target || el.contains(event.target))) {
                    (vnode || {} as any).context[binding.expression](event);
                }
            };
            document.addEventListener('click', el.clickOutsideEvent);
        },
        unbind: function (el: any) {
            document.removeEventListener('click', el.clickOutsideEvent);
        },
    });
</script>
