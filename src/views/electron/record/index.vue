<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'ant-design:delete-outlined',
                color: 'error',
                tooltip: '删除',
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
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { deleteRecord, getRecordList } from '/@/api/electron/record';
  import { PageWrapper } from '/@/components/Page';
  import { columns, searchFormSchema } from './record.data';

  export default defineComponent({
    name: 'RecordManagement',
    components: { BasicTable, PageWrapper, TableAction },
    setup() {
      const searchInfo = reactive({});
      const [registerTable, { reload }] = useTable({
        title: '录制列表管理',
        api: getRecordList,
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
            text: '搜索',
            onClick: () => {
              reload();
            },
          },
        },
        useSearchForm: true,
        showTableSetting: true,
        bordered: true,
        handleSearchInfoFn(info) {
          console.log('handleSearchInfoFn', info);
          return info;
        },
        actionColumn: {
          width: 120,
          title: '操作',
          dataIndex: 'action',
          // slots: { customRender: 'action' },
        },
      });

      function handleDelete(record) {
        deleteRecord(record._id).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        handleDelete,
        handleSuccess,
        searchInfo,
      };
    },
  });
</script>
