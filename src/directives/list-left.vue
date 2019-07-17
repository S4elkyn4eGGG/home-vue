<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default Vue.directive('list-left', {
  bind: function (el: any, binding: any) {
    el.style.left = `${binding.value.offsetLeft + binding.value.offsetWidth}px`;
  },
});
</script>
