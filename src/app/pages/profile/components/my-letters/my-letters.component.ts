import {Component, OnInit} from '@angular/core';
import {UserService} from './../../../../core/services/user/user.service';
import {ProfileService} from './../../../../core/services/profile/profile.service';
import {Apollo} from 'apollo-angular';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
	selector: 'my-letters',
	templateUrl: './my-letters.component.html',
	styleUrls: ['./my-letters.component.scss'],
})
export class MyLettersComponent implements OnInit {
	data: Observable<any>;
	items: any[] = [];
	constructor(private userService: UserService, private profileService: ProfileService, private apollo: Apollo) {}

	ngOnInit(): void {
		this.getData().subscribe((result) => {
			result.map((result) => {
				this.items = [...this.items, result];
			});
		});
	}

	getData(): any {
		const user = this.userService.getValueTokenKey('user_id');
		return (this.data = this.apollo
			.watchQuery<any>({
				query: this.profileService.letters,
				variables: {
					user_id: 7,
				},
			})
			.valueChanges.pipe(map((result: any) => result.data.getUserLetters)));
	}
}
