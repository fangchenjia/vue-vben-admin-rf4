<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                tooltip: '审批',
                onClick: handleApprove.bind(null, record),
              },
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除此点位',
                popConfirm: {
                  title: '是否确认删除',
                  placement: 'left',
                  confirm: handleDelete.bind(null, record),
                },
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
    <PositionApproveModal @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { getPositionList, deletePosition } from '/@/api/approve/positionApprove';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import PositionApproveModal from './positionApproveModal.vue';
  import { columns, searchFormSchema } from './positionApprove.data';

  export default defineComponent({
    name: 'PositionApprove',
    components: { BasicTable, PageWrapper, TableAction, PositionApproveModal },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive({});
      const [registerTable, { reload }] = useTable({
        title: '点位列表',
        api: getPositionList,
        fetchSetting: {
          pageField: 'pageNum',
          sizeField: 'pageSize',
          totalField: 'total',
          listField: 'list',
        },
        rowKey: '_id',
        columns,
        formConfig: {
          labelWidth: 120,
          schemas: searchFormSchema,
          autoSubmitOnEnter: true,
          submitButtonOptions: {
            text: '查询',
            onClick: () => {
              reload();
            },
          },
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      function handleApprove(record) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record) {
        deletePosition(record._id).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleApprove,
        handleDelete,
        handleSuccess,
        searchInfo,
      };
    },
  });
</script>
