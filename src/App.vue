<template>
  <a-layout>
    <a-layout-header></a-layout-header>
    <a-layout-content>
      <ComForm />


    </a-layout-content>
    <a-layout-footer></a-layout-footer>
  </a-layout>

</template>

<script>
import { defineComponent } from "vue";
import ComForm from "./components/ComForm.vue";

export default defineComponent({
components: {
  ComForm,
},
});
</script>

<style>

.ant-layout-content{
  padding: 20px;
  background: #FAFAFA;
}



</style>