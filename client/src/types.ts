type Exercise = {id:number|null,title:string,year:number,status:boolean,date:[string,string]}
type Activity = {id:number|null,title:string,description:string,type:string,status:boolean,date:[string,string],exercise:Exercise}
type Participant = {firstname:string,lastname:string,login:string,phone:string,email:string,status:boolean,domain:string,structure:string}
type Responsible = {firstname:string,lastname:string,login:string,phone:string,email:string,status:boolean,domain:string}
type Attendance = {participantId:number,activityId:number,attendance:boolean}
