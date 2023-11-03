import { RoleItem } from './roleModel';

export interface UserItem {
  _id: string;
  roles: RoleItem[];
  mobile: string;
  nickname: string;
  avatar: string;
  status: number;
}
