// import { IRole } from "./IRole";
interface Base {
  _id: any
}

export interface IOrder extends Base {
  customer: any;
  products: any[];
  status: string;
  totalAmount: number;
  totalDonate: number;
  orderDate: string;
  // pageInfo: any;
  
}
export interface IRecord {
  totalRecords: number
}
export interface ICompany {
  _id : string;
  name: string
}