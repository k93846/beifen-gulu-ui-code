const a = 
` <template>
    <ButtonDetail :theme="'button'" disabled>禁用按钮</ButtonDetail>
    <ButtonDetail :theme="'link'" disabled>禁用链接按钮</ButtonDetail>
    <ButtonDetail :theme="'text'" disabled>禁用文本按钮</ButtonDetail>
 </template>
  <script>
 import ButtonDetail from '../lib/ButtonDetail.vue';
 export default {
     components: { ButtonDetail }
 }
 </script>`
export default {a}
