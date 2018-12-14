import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	
	students: any;

	//injecting the router and dataservice to this class
	constructor(public data:DataService, private router: Router){

		// assigning the data from the data service to the students array
		this.students = this.data.students;
	}

	//navigate to the student page and pass the index of the clicked student
	getInfo(id) {
    
    	this.router.navigateByUrl('/student/'+id);
  	}
}
