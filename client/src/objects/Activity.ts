import { Exercise } from "./Exercise";
export interface Activity
{
  id:number|null;
  title:string;
  description:string;
  type:string;
  status:boolean;
  date:[string,string]
  exercise:Exercise
}
