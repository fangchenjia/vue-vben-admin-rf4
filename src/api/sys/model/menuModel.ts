import type { RouteMeta } from 'vue-router';

export interface RouteItem {
  name: string;
  path: string;
  component: string;
  permission: string;
  sort: number;
  parent: string;
  type: number;
  meta: RouteMeta;
  redirect?: string;
  caseSensitive?: boolean;
  children?: RouteItem[];
}

/**
 * @description: Get menu return value
 */
export type getMenuListResultModel = RouteItem[];
