type Exercise = {id:number|null,title:string,year:number,status:boolean,date:[string,string]}
type Activity = {id:number|null,title:string,description:string,type:string,status:boolean,date:[string,string],exercise:Exercise}
type Participant = {id:number|null,firstname:string,lastname:string,login:string,phone:string,email:string,status:boolean,domain:string,structure:string,password:string}
type Responsible = {id:number|null,firstname:string,lastname:string,login:string,phone:string,email:string,status:boolean,domain:string}
type Attendance = {id:number|null,participantId:number,activityId:number,attendance:boolean}
