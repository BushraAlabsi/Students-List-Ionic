import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  id: any;
  student: any;

  //injecting the router and dataservice to this class
  constructor(public data:DataService, private route: ActivatedRoute) {}

  ngOnInit() {

    this.id = this.route.snapshot.paramMap.get('id'); //extract the id from the route
	  this.student = this.data.students[this.id]; //get the student with a specific id from the data

  }

}
