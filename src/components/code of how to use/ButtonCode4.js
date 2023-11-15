const a = 
` <template>
    <Button :theme="'button'" disabled>禁用按钮</Button>
    <Button :theme="'link'" disabled>禁用链接按钮</Button>
    <Button :theme="'text'" disabled>禁用文本按钮</Button>
 </template>
  <script>
 import Button from '../lib/Button.vue';
 export default {
     components: { Button }
 }
 </script>`
export default {a}
