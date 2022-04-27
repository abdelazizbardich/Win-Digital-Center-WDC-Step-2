type Exercise = {id:number|null,title:string,year:number,status:boolean,date:[string,string]}
type Activity = {id:number|null,title:string,description:string,type:string,status:boolean,date:[string,string],exercise:Exercise}
type Participant = {id:number|null,firstname:string,lastname:string,login:string,phone:string,email:string,status:boolean,domain:string,structure:string,password:string}
type Responsible = {id:number|null,firstname:string,lastname:string,login:string,phone:string,email:string,status:boolean,domain:string,password:string}
type Attendance = {id:number|null,participant:Participant,activity:Activity,present:boolean}
type Admin = {id:number|null,firstname:string,lastname:string,login:string,phone:string,email:string,status:boolean,password:string}
