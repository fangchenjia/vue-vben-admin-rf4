import { BasicColumn, FormSchema } from '/@/components/Table';
import { formatToDateTime } from '/@/utils/dateUtil';

const positionStatusOptions = [
  {
    label: '待审批',
    value: 'pendingReview',
  },
  {
    label: '审批通过',
    value: 'approved',
  },
  {
    label: '审批拒绝',
    value: 'rejected',
  },
];
export const columns: BasicColumn[] = [
  {
    title: '标题',
    dataIndex: 'title',
  },
  {
    title: '投稿人',
    dataIndex: 'author',
    customRender: ({ record }) => {
      return record.author.nickname;
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    customRender: ({ record }) => {
      return positionStatusOptions.find((item) => {
        if (item.value === record.status) {
          return item.label;
        }
      })?.label;
    },
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    customRender: ({ record }) => {
      return formatToDateTime(record.createdAt);
    },
  },
  {
    title: '描述',
    dataIndex: 'description',
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    // 'approved'| 'disabled'| 'deleted'| 'pendingReview'| 'rejected';
    field: 'status',
    label: '审批状态',
    component: 'Select',
    componentProps: {
      options: positionStatusOptions,
    },
    colProps: { span: 8 },
  },
];

export const approveFormSchema: FormSchema[] = [
  {
    field: 'status',
    label: '审批状态',
    component: 'Select',
    componentProps: {
      options: positionStatusOptions,
    },
    colProps: { span: 8 },
    required: true,
  },
];
