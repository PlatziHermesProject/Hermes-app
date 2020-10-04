import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-letter',
	templateUrl: './letter.component.html',
	styleUrls: ['./letter.component.scss'],
})
export class LetterComponent implements OnInit {
	@Input() item;
	constructor() {}

	ngOnInit(): void {}
}
