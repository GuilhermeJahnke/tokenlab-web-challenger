import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsProvider } from 'commons/utils';
import { HttpService } from './http.service';
import { ENV } from '../../environments/environment-variables.token';

@Injectable({
	providedIn: 'root'
})
export class CalendarService {
	constructor(
		private http: HttpService,
		private router: Router,
		private utils: UtilsProvider,
	) { }

	create(data: any): any {
		return new Promise((resolve, reject) => {
			this.http.post('events/events/create', true, data).then(res => {
				console.log(res)
				resolve(res);
			}).catch(err => {
				reject(err)
				console.log('erroorrre', err);
			});
		});
	}

	update(data: any): any {
		return new Promise<void>((resolve, reject) => {
			this.http.post('events/events/edit', true, data).then(res => {
				console.log('UPDATE RESPONSE', res);
				resolve(res);
			}).catch(err => {
			
				reject(err)
			});
		});
	}

	delete(data: any): any {
		return new Promise<void>((resolve, reject) => {
			this.http.post('events/events/remove', true, data).then(res => {
				console.log('DELETE RESPONSE', res);
				resolve(res);
			}).catch(err => {
			
				reject(err)
			});
		});
	}
	
	getAvailableHours(data: any): any {
		return new Promise<void>((resolve, reject) => {
			this.http.post('events/events/getEventsForHours', true, data).then(res => {
				console.log('getEventsForHours RESPONSE', res);
				resolve(res);
			}).catch(err => {
				reject(err)
			});
		});
	}

}


