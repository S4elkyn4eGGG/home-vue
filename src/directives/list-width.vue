<script lang="ts">
  import { Vue } from 'vue-property-decorator';

  export default Vue.directive('list-width', {
    bind: function (el: any, binding: any) {
      el.style.minWidth = `${binding.value}px`;
    },
  });
</script>
