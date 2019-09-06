import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participate-exam',
  templateUrl: './participate-exam.component.html',
  styleUrls: ['./participate-exam.component.css']
})
export class ParticipateExamComponent implements OnInit {
	participateExamScreen = "Participate Exam Screen";
	participateExamIco = "fa fa-book";
	constructor() { }

	ngOnInit() {
	}

}
