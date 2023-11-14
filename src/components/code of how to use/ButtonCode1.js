const a = 
` <template>
     <ButtonDetail :theme="'button'">你好</ButtonDetail>
     <ButtonDetail :theme="'link'">你好</ButtonDetail>
     <ButtonDetail :theme="'text'">你好</ButtonDetail>
 </template>
  <script>
 import ButtonDetail from '../lib/ButtonDetail.vue';
 export default {
     components: { ButtonDetail }
 }
 </script>`
export default {a}
