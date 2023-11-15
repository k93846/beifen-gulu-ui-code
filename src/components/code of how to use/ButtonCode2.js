const a = 
` <template>
      <Button :theme="'button'" :size="'big'">大大大</Button>
      <Button :theme="'button'" :size="'normal'">普通</Button>
      <Button :theme="'button'" :size="'small'">小小小</Button>
      <Button :theme="'link'" :size="'big'">大大大</Button>
      <Button :theme="'link'" :size="'normal'">普通</Button>
      <Button :theme="'link'" :size="'small'">小小小</Button>
      <Button :theme="'text'" :size="'big'">大大大</Button>
      <Button :theme="'text'" :size="'normal'">普通</Button>
      <Button :theme="'text'" :size="'small'">小小小</Button>
 </template>
  <script>
 import Button from '../lib/Button.vue';
 export default {
     components: { Button }
 }
 </script>`
export default {a}
