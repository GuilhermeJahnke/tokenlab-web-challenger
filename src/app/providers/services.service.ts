import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsProvider } from 'commons/utils';
import { HttpService } from './http.service';

@Injectable({
	providedIn: 'root'
})
export class ServicesService {
	constructor(
		private http: HttpService,
		private router: Router,
		private utils: UtilsProvider,
	) { }

	create(data: any): any {
		return new Promise((resolve, reject) => {
			this.http.post('service/service/create', true, data).then(res => {
				console.log(res)
			}).catch(err => {
				reject(err)
				console.log('erroorrre', err);
			});
		});
	}

	update(data: any): any {
		return new Promise<void>((resolve, reject) => {
			this.http.post('service/service/edit', true, data).then(res => {
				console.log('UPDATE RESPONSE', res);
				
			}).catch(err => {
			
				reject(err)
			});
		});
	}

	delete(data: any): any {
		return new Promise<void>((resolve, reject) => {
			this.http.post('service/service/delete', true, data).then(res => {
				console.log('DELETE RESPONSE', res);
				
			}).catch(err => {
			
				reject(err)
			});
		});
	}

	getAll() {
		return new Promise<void>((resolve, reject) => {
			this.http.get('service/service/getAll', true).then((res: any) => {
				resolve(res);
			})
			.catch(err => {
				reject(err);
			});
		});
	}

}


