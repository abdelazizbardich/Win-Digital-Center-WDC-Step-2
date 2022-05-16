import { Activity } from "./Activity";
import { Participant } from "./Participant";

export interface Attendance{
  id:number|null;
  participant:Participant;
  activity:Activity;
  present:boolean;
}
