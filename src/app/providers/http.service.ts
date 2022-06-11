import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
// import { environment } from '../environments/environment';
// import { reject } from 'q';
// import { Observable } from "rxjs";
// import "rxjs/add/operator/map";
// import {MatSnackBar} from '@angular/material/snack-bar';
// import { ENV } from '../environments/environment-variables.token';

@Injectable({
	providedIn: 'root'
})
export class HttpService {
	private model: Array<any>;
	public user: any;
	private token: any;
	private count = 0;
	private timer: any;

	public activeModal: any;
	public delay: any;
	constructor(
		private http: HttpClient,
		// private snackBar: MatSnackBar,
		private router: Router,
		// tslint:disable-next-line:no-shadowed-variable
	) { }



	get(path: string, auth: boolean = true, baseHost?: any): any {
		if (!auth) {
			return this.request(path, 'get', false, {}, baseHost);
		} else {
			return this.getToken().then(() => {
				return this.request(path, 'get', true, {}, baseHost);
			});
		}
	}

	post(path: string, auth: boolean = true, data: any, baseHost?: any): any {
		if (!auth) {
			return this.request(path, 'post', false, data, baseHost);
		} else {
			return this.getToken().then(() => {
				return this.request(path, 'post', true, data, baseHost);
			});
		}
	}

	getToken(): any {
		return new Promise((resolve, reject) => {
			this.token = localStorage.getItem('currentUser_token');
			// const temp = JSON.parse(sessionStorage.getItem("currentUser_token"));
			// this.token = temp ? temp._value : "";
			resolve(this.token);
		}).catch(err => console.log('Error trying to get token: ', err));
	}
	setToken(token: string): any {
		return new Promise<void>((resolve, reject) => {
			localStorage.setItem('currentUser_token', token);
			// this.session.set("currentUser_token", token, 2, "h");
			this.token = token;
			resolve();
		}).catch(err => console.log('Error trying to set token: ', err));
	}

	request(path: string, method: string, auth: boolean, data: any = {}, baseHost: any): any {

		// if (!environment.API_URL) { environment.API_URL = 'https://apihmlg.youdoctor.com.br'; }
		let url: string = String(environment.API_URL) + '/' + String(path);
		console.log('this.token;', this.token);
		if (baseHost) { url = baseHost + '/' + String(path); }
		const headers: any = {};
		headers['Content-Type'] = 'application/json';
		if (auth) {
			headers.Authorization = "Bearer " + this.token;
		}

		let params: Array<any>;

		if (method === 'post') {
			params = [url, data, { headers }];

		} else {
			params = [url, { headers }];
		}
		console.log('parans', params);

		this.count++;
		return new Promise((resolve, reject) => {
			this.http[method](...params)
				.subscribe(res => {
					console.log('res: ', res);
					this.count--;
					if (this.count === 0) {
						if (this.timer) { clearTimeout(this.timer); }
						
					}
					resolve(res);
					// loading.dismiss();
				}, (err) => {
					console.log('ERROR: ', err.status);
					if (err.status === 401){
						console.log('sessao expirada');
						localStorage.clear();
						this.toast({
							/* message: err.error.message, */
							message: 'Sessão expirada realize o login novamente',
							duration: 10000,
							action: 'Ok'
						});
						this.router.navigate(['/entrar']);
					}
					this.count--;
					if (this.count === 0) {
						if (this.timer) { clearTimeout(this.timer); }
					}
					// if (err.error.message) {this.openSnackBar(err.error.message); } else if (err.message) {this.openSnackBar(err.message); }
					// console.log("Error on request method (http service): ", err);
					if (err.error && err.error.message) { return reject(err.error.message); }
					reject(err);
					// loading.dismiss();
				});
		});
	}
	// openSnackBar(message: string, action: string = 'OK', duration = 4000, ) {
	// 	this.snackBar.open(message, action, {
	// 	  duration,
	// 	  verticalPosition: 'top',
	// 	});
	// }
	
	autorizedRequest(method: string, url: string, data?: any) {
		const requestUrl = environment.API_URL + '/' + url;
		const headers: any = { 'Content-Type': 'application/json'};
		headers.Authentication = localStorage.getItem('token');

		if (method === 'get') {
			this.model = [requestUrl, { headers }];
		} else { this.model = [requestUrl, data, { headers }]; }

		return this.http[method](...this.model).toPromise();
	}

	unaltorizeRequest(method: string, url: string, data?: any) {
		const requestUrl = environment.API_URL + '/' + url;
		const headers: any = { 'Content-Type': 'application/json'};
		if (method === 'get') {
			this.model = [requestUrl, { headers }];
		} else { this.model = [requestUrl, data, { headers }]; }
		console.log('REQUEST URL: ', requestUrl);
		console.log('REQUEST MODEL: ', this.model);
		return this.http[method](...this.model).toPromise();
	}
	toast(options: any) {
		// this.snackBar.open(options.message, options.action, {
		// 	duration: options.duration || 6000,
		// });
	}
}
