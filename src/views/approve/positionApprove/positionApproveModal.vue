<template>
  <BasicModal
    v-bind="$attrs"
    @register="registerModal"
    :min-height="350"
    :width="1000"
    title="修改状态"
    @ok="handleSubmit"
  >
    <BasicForm @register="registerForm" />
    <iframe :src="iframeSrc" :key="iframeSrc" frameborder="0" width="100%" height="300px"></iframe>
  </BasicModal>
</template>
<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { approveFormSchema } from './positionApprove.data';
  import { approvePosition } from '/@/api/approve/positionApprove';

  export default defineComponent({
    name: 'PositionApproveModal',
    components: { BasicModal, BasicForm },
    emits: ['success', 'register'],
    setup(_, { emit }) {
      const rowId = ref('');
      const iframeSrc = computed(() => {
        return `https://rf4.cosycosy.cn/#/point-detail/${rowId.value}`;
      });

      const [registerForm, { setFieldsValue, resetFields, validate }] = useForm({
        labelWidth: 100,
        baseColProps: { span: 24 },
        schemas: approveFormSchema,
        showActionButtonGroup: false,
        actionColOptions: {
          span: 23,
        },
      });

      const [registerModal, { setModalProps, closeModal }] = useModalInner(async (data) => {
        resetFields();
        setFieldsValue({ ...data.record });
        rowId.value = data.record._id;
        setModalProps({ confirmLoading: false });
      });

      async function handleSubmit() {
        try {
          const values = await validate();
          setModalProps({ confirmLoading: true });
          // TODO custom api
          await approvePosition({ ...values, id: rowId.value });
          emit('success');
          closeModal();
        } finally {
          setModalProps({ confirmLoading: false });
        }
      }

      return { registerModal, registerForm, handleSubmit, iframeSrc };
    },
  });
</script>
