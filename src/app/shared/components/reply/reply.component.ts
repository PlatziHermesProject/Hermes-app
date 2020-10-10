import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-reply',
	templateUrl: './reply.component.html',
	styleUrls: ['./reply.component.scss'],
})
export class ReplyComponent implements OnInit {
	@Input() item;
	constructor() {}

	ngOnInit(): void {
		console.log(this.item[0]);
		
	}
}