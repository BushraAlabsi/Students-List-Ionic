import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  students: any = [
{
   First_name: "Razan",
   Last_name: "Mohammad",
   Birth_date: new Date(2000, 0, 24),
   Email: "razan@hotmail.com"
}, {
   First_name: "Hussain",
   Last_name: "Odeh",
   Birth_date: new Date(1999,11,30),
   Email: "hodeh@yahoo.com"
},{
   First_name: "Abeer",
   Last_name: "Rushaidi",
   Birth_date: new Date(2000,7,23),
   Email: "abeer.r@live.com"
}  ]
  constructor() { }
}
