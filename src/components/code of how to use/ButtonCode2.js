const a = 
` <template>
      <ButtonDetail :theme="'button'" :size="'big'">大大大</ButtonDetail>
      <ButtonDetail :theme="'button'" :size="'normal'">普通</ButtonDetail>
      <ButtonDetail :theme="'button'" :size="'small'">小小小</ButtonDetail>
      <ButtonDetail :theme="'link'" :size="'big'">大大大</ButtonDetail>
      <ButtonDetail :theme="'link'" :size="'normal'">普通</ButtonDetail>
      <ButtonDetail :theme="'link'" :size="'small'">小小小</ButtonDetail>
      <ButtonDetail :theme="'text'" :size="'big'">大大大</ButtonDetail>
      <ButtonDetail :theme="'text'" :size="'normal'">普通</ButtonDetail>
      <ButtonDetail :theme="'text'" :size="'small'">小小小</ButtonDetail>
 </template>
  <script>
 import ButtonDetail from '../lib/ButtonDetail.vue';
 export default {
     components: { ButtonDetail }
 }
 </script>`
export default {a}
