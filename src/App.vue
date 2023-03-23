<template>
  <a-layout>
    <a-layout-sider>
      <SideBar/>

    </a-layout-sider>
    <a-layout>
    <a-layout-header></a-layout-header>
    <a-layout-content>
      <CustomerService/>


    </a-layout-content>
    <a-layout-footer></a-layout-footer>
  </a-layout>
  </a-layout>

</template>

<script>
import { defineComponent } from "vue";
// import ComForm from "./components/ComForm.vue";
import SideBar from './components/SideNavigation.vue';
import CustomerService from './components/CustomerService.vue';


export default defineComponent({
components: {
  // ComForm,
  SideBar,
  CustomerService,
},
});
</script>

<style>

.ant-layout-content{
  padding: 20px;
  background: #FAFAFA;
}



</style>