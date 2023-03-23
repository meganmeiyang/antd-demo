<template>
<a-tabs v-model:activeKey="activeKey" >

<a-tab-pane key="1" tab="Services">
    <div style="margin-left: 10px">
        <a-row :gutter="[16,24]">
            <a-typography-title :level="2">
                Technical Service
            </a-typography-title>
        <!-- <a-card 
        style="width: 95%; margin: auto; padding: 10px; box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05)"
        :bordered="false"
        title="Service"
        >
        
        </a-card> -->
        </a-row>
    </div>
    <a-row :gutter="[16,24]">
      <a-col :span="8">
        <a-card  :bordered="false" class="cute-card" @click="showDrawer('suspend')">
            <template #title>
                <a-space>
                <pause-circle-outlined class="service-icon"/>
                Suspend SIM
            </a-space>
            </template>
        
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card  :bordered="false" class="cute-card">
            <template #title>
                <a-space>
                <play-circle-outlined class="service-icon" />
                Restore SIM
            </a-space>
            </template>
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card  :bordered="false" class="cute-card">
            <template #title>
                <a-space>
                <close-circle-outlined class="service-icon"/>
                Cancel SIM
            </a-space>
            </template>
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>

    <div style="margin-left: 10px; margin-top:100px">
    <a-row :gutter="[16,32]">
        <a-typography-title :level="2">
            Order Service
        </a-typography-title>
    <!-- <a-card 
    style="width: 95%; margin: auto; padding: 10px; box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05)"
    :bordered="false"
    title="Service"
    >
    
    </a-card> -->
</a-row >
</div>
    <a-row :gutter="[16,24]">
      <a-col :span="8">
        <a-card  :bordered="false" class="cute-card">
            <template #title>
                <a-space>
                <issues-close-outlined class="service-icon" />
                Renew Order
            </a-space>
            </template>
        
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card  :bordered="false" class="cute-card">
            <template #title>
                <a-space>
                    <retweet-outlined class="service-icon"/>
                Replace 
            </a-space>
            </template>
          <p>card content</p>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card  :bordered="false" class="cute-card">
            <template #title>
                <a-space>
                <stop-outlined class="service-icon"/>
                 Cancel Order
                </a-space>
            </template>
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>


    <a-drawer
    :title="drawer.title"
    :width="950"
    :visible="visible"
    :body-style="{ paddingBottom: '80px' }"
    :footer-style="{ textAlign: 'right' }"
    @close="onClose"
  >
    <a-form :model="form" :rules="rules" layout="vertical">
      <a-row :gutter="32" align="middle">
        <a-col :span="18">
          <a-form-item label="ICCID" name="iccid">
            <a-textarea 
            v-model:value="form.iccid" 
            :rows="9"
            placeholder="Please enter SIM ICCIDs, one on a line">
            
        </a-textarea>
          </a-form-item>
        </a-col>
        <a-col :span="6">
            <a-button @click="onCheck">
                <template #icon>
                    <search-outlined />
                </template>
                check</a-button>
            
        </a-col>

      </a-row>
      <a-row :gutter="16">


        <!--TABLE of ICCIDS-->

        <a-table 
        v-if="showTable"
        :row-selection="{ selectedRowKeys: selectedRowKeys, onChange: onSelectChange }"
        :columns="columns" 
        :data-source="data"
        
        >
    <template #headerCell="{ column }">
      <template v-if="column.key === 'iccid'">
        <span>
            <field-number-outlined />
          ICCID
        </span>
      </template>
    </template>

    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'iccid'">
        <a>
          {{ record.iccid }}
        </a>
      </template>
      <template v-else-if="column.key === 'lifecycle'">
        
          <a-tag :color="record.lifecycle === 'Active' ? 'green' : 'pink'">
            {{ record.lifecycle }}
          </a-tag>
        
      </template>
      <template v-else-if="column.key === 'status'">
        <a-tag :color="record.status === 'On' ? 'green' : 'pink'">
            {{ record.status }}
        </a-tag>
      </template>
    </template>
  </a-table>


      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="From" name="from">
            <a-select v-model:value="form.from" placeholder="Please choose the request source">
              <a-select-option value="jack">Customer</a-select-option>
              <a-select-option value="tom">Internal</a-select-option>

            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Jira ID" name="jiraid">
            <a-input v-model:value="form.jira" placeholder="Please input Jira issue ID">
                
            </a-input>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="Reason" name="description">
            <a-textarea
              v-model:value="form.description"
              :rows="4"
              placeholder="please enter reasons for this service"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <template #extra>
      <a-space>
        <a-button @click="onClose">Cancel</a-button>
        <a-button type="primary" @click="onClose">Submit</a-button>
      </a-space>
    </template>
  </a-drawer>

</a-tab-pane>

<a-tab-pane key="2" tab="Records">
<a-typography-title>
    Service Records
</a-typography-title>
</a-tab-pane>
</a-tabs>
</template>
<script>
  import { defineComponent, reactive,ref, toRefs } from 'vue';
  import { PauseCircleOutlined,
    PlayCircleOutlined,
    // CheckCircleOutlined,
    CloseCircleOutlined,
    StopOutlined,
    RetweetOutlined,
    IssuesCloseOutlined,
    SearchOutlined,
    FieldNumberOutlined,
} from '@ant-design/icons-vue';


const columns = [{
  name: 'ICCID',
  dataIndex: 'iccid',
  key: 'iccid',
}, {
  title: 'IMSI',
  dataIndex: 'imsi',
  key: 'imsi',
}, {
  title: 'Organisation',
  dataIndex: 'org',
  key: 'org',
}, {
  title: 'Status',
  key: 'lifecycle',
  dataIndex: 'lifecycle',
}, 
{
    title:"Expires",
    key: 'expires',
    dataIndex: 'expires'
},
{
  title: 'Flow Status',
  key: 'status',
  dataIndex: 'status'
}];
const data = [{
  key: '1',
  iccid: '8927319317474456501',
  imsi: '243850238357',
  org: 'New Orlends Tracking Limited.',
  lifecycle: 'Active',
  expires: '2023-09-01',
  status: 'On'
}, {
    key: '2',
  iccid: '892731931798305655',
  imsi: '246450238315',
  org: 'Greenwich Technologies Ptd.',
  lifecycle: 'Active',
  expires: '2033-09-01',
  status: 'Off at overage'
}];
  export default defineComponent({
    components: {
        PauseCircleOutlined,
        // CheckCircleOutlined,
        PlayCircleOutlined,
        CloseCircleOutlined,
        StopOutlined,
        RetweetOutlined,
        IssuesCloseOutlined,
        SearchOutlined,
        FieldNumberOutlined,
    //   UploadOutlined,
    //   InboxOutlined,
    },
    setup() {
        const state = reactive({
          selectedRowKeys: [],
          // Check here to configure the default column
          loading: false,
        });

        const showTable = ref(false);

        const drawer = reactive({
            title: '',
            type: '',
        });
      const form = reactive({
        iccid: '',
        owner: '',
        type: '',
        from: '',
        dateTime: null,
        jira: '',
        description: '',
      });
      const rules = {
      iccid: [{
        required: true,
        message: 'Please enter at least 1 ICCID',
      }],
      jiraid: [{
        required: true,
        message: 'Please provide jira issue ID',

      }],
      owner: [{
        required: true,
        message: 'Please select an owner',
      }],
      type: [{
        required: true,
        message: 'Please choose the type',
      }],
      from: [{
        required: true,
        message: 'Please choose the request source',
      }],
      dateTime: [{
        required: true,
        message: 'Please choose the dateTime',
        type: 'object',
      }],
      description: [{
        required: true,
        message: 'Please enter url description',
      }],
    };
    const visible = ref(false);
      const formItemLayout = {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 14,
        },
      };
      const formState = reactive({
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
      });
      const onFinish = values => {
        console.log('Success:', values);
      };
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      const showDrawer = (key) => {
        if(key === 'suspend'){
            visible.value = true;
            drawer.title = 'Suspend SIM';
            drawer.type = 'suspend';
        }
      };
      const onClose = () => {
        visible.value = false;
      };

      const onCheck = () => {
        showTable.value = true;
      }
      const onSelectChange = selectedRowKeys => {
      console.log('selectedRowKeys changed: ', selectedRowKeys);
      state.selectedRowKeys = selectedRowKeys;
        };
      return {
        form,
        rules,
        visible,
        onClose,
        formState,
        onFinish,
        onFinishFailed,
        formItemLayout,
        showDrawer,
        drawer,
        ...toRefs(state),
        data,
        columns,
        onSelectChange,
        activeKey: ref('1'),
        onCheck,
        showTable
      };
    },
  });
  </script>

<style scoped>
.cute-card {
    border-radius: 12px; 
    box-shadow: 0px 20px 27px rgba(0, 0, 0, 0.05);
}

.spacer{
    margin-top: 120px;
}

.service-icon{
    font-size: 32px;

}
</style>
  