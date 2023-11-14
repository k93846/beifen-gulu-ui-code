const a = 
` <template>
     <ButtonDetail :theme="'button'" loading>加载按钮</ButtonDetail>
     <ButtonDetail :theme="'button'">加载完毕</ButtonDetail>
 </template>
  <script>
 import ButtonDetail from '../lib/ButtonDetail.vue';
 export default {
     components: { ButtonDetail }
 }
 </script>`
export default {a}
