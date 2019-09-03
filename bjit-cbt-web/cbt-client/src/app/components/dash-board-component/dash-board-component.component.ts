import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board-component',
  templateUrl: './dash-board-component.component.html',
  styleUrls: ['./dash-board-component.component.css']
})
export class DashBoardComponentComponent implements OnInit {
	dash = "Dash Board Screen";
	dashIco = "fa fa-tachometer";
	constructor() { }

	ngOnInit() {
	}

}
