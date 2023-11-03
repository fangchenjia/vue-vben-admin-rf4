import { ref } from 'vue';
import { getRoleList } from '/@/api/system/role';
import { BasicColumn, FormSchema } from '/@/components/Table';
import { formatToDateTime } from '/@/utils/dateUtil';
import { RoleItem } from '/@/api/system/model/roleModel';

const roleList = ref<RoleItem[]>([]);
getRoleList().then((res) => {
  roleList.value = res;
});

export const columns: BasicColumn[] = [
  {
    title: '手机号',
    dataIndex: 'mobile',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nickname',
    width: 120,
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    width: 180,
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
  {
    title: '角色',
    dataIndex: 'roles',
    width: 200,
    customRender: ({ record }) => {
      return roleList.value
        ?.filter((item) => record.roles.includes(item._id))
        .map((item) => item.name)
        .join(',');
    },
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    label: '手机号',
    field: 'mobile',
    component: 'Input',
    colProps: { span: 8 },
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    colProps: { span: 8 },
  },
];

export const accountFormSchema: FormSchema[] = [
  {
    label: '手机号',
    field: 'mobile',
    component: 'Input',
    required: true,
  },
  {
    label: '角色',
    field: 'roles',
    component: 'ApiSelect',
    componentProps: {
      api: getRoleList,
      labelField: 'name',
      valueField: '_id',
      mode: 'multiple',
    },
    required: true,
  },
  {
    field: 'nickname',
    label: '昵称',
    component: 'Input',
    required: true,
  },

  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
];
