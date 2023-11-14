const a = 
` <template>
      <ButtonDetail :theme="'button'" :level="'main'">主要按钮</ButtonDetail>
      <ButtonDetail :theme="'button'" :level="'normal'">普通按钮</ButtonDetail>
      <ButtonDetail :theme="'button'" :level="'danger'">危险按钮</ButtonDetail>
      <ButtonDetail :theme="'link'" :level="'main'">主要链接按钮</ButtonDetail>
      <ButtonDetail :theme="'link'" :level="'normal'">普通链接按钮</ButtonDetail>
      <ButtonDetail :theme="'link'" :level="'danger'">危险链接按钮</ButtonDetail>
      <ButtonDetail :theme="'text'" :level="'main'">主要文本按钮</ButtonDetail>
      <ButtonDetail :theme="'text'" :level="'normal'">普通文本按钮</ButtonDetail>
      <ButtonDetail :theme="'text'" :level="'danger'">危险文本按钮</ButtonDetail>
 </template>
  <script>
 import ButtonDetail from '../lib/ButtonDetail.vue';
 export default {
     components: { ButtonDetail }
 }
 </script>`
export default {a}
