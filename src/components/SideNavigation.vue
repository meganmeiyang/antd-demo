<template>
    <!-- <a-card 
    style="width: 80%; margin: auto;  box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05)"
    :bordered="false"
    
    >
    <customer-service-filled />
    <a-typography-text size="small">Customer Service
    </a-typography-text>
    </a-card> -->
    
    
    <a-button type="text">
        <customer-service-filled />
        Customer Service
    </a-button>
</template>

<script>
import { defineComponent, /*reactive*/ } from 'vue';
import { CustomerServiceFilled } from '@ant-design/icons-vue';
export default defineComponent({
  components: {
    CustomerServiceFilled
  },
  setup() {
    
    return {
      
    };
  },
});
</script>