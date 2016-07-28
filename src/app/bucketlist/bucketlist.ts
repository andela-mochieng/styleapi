import { Bucketlistitems } from './bucketlistitems';

export interface Bucketlist {
  id: number;
  list_name: string;
  items: Bucketlistitems[];
  date_created: string;
  date_updated: string;
  user_id: string;
}
