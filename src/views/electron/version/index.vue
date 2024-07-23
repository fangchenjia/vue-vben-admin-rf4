<template>
  <PageWrapper dense contentFullHeight fixedHeight contentClass="flex">
    <BasicTable @register="registerTable" :searchInfo="searchInfo">
      <template #toolbar>
        <a-button @click="handleCreate"> 新增 </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            :actions="[
              {
                icon: 'clarity:note-edit-line',
                tooltip: '编辑',
                onClick: handleEdit.bind(null, record),
              },
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
    <DictModel @register="registerModal" @success="handleSuccess" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, reactive } from 'vue';

  import { BasicTable, useTable, TableAction } from '/@/components/Table';
  import { deleteVersion, getVersionList } from '/@/api/electron/version';
  import { PageWrapper } from '/@/components/Page';

  import { useModal } from '/@/components/Modal';
  import DictModel from './VersionModal.vue';

  import { columns, searchFormSchema } from './version.data';

  export default defineComponent({
    name: 'VersionManagement',
    components: { BasicTable, PageWrapper, DictModel, TableAction },
    setup() {
      const [registerModal, { openModal }] = useModal();
      const searchInfo = reactive({});
      const [registerTable, { reload }] = useTable({
        title: '版本管理',
        api: getVersionList,
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

      function handleCreate() {
        openModal(true, {
          isUpdate: false,
        });
      }

      function handleEdit(record) {
        openModal(true, {
          record,
          isUpdate: true,
        });
      }

      function handleDelete(record) {
        deleteVersion(record._id).then(() => {
          reload();
        });
      }

      function handleSuccess() {
        reload();
      }

      return {
        registerTable,
        registerModal,
        handleCreate,
        handleEdit,
        handleDelete,
        handleSuccess,
        searchInfo,
      };
    },
  });
</script>
./version.data
