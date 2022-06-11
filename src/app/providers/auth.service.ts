import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsProvider } from 'commons/utils';
import { HttpService } from './http.service';
import { ENV } from '../../environments/environment-variables.token';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(
		private http: HttpService,
		private router: Router,
		private utils: UtilsProvider,
	) { }

	login(data: any): any {
		return new Promise((resolve, reject) => {
			this.http.post('user/user/login', false, data).then(res => {
				this.setToken(res.token).then(() => {
					resolve(res.token);
				});
			}).catch(err => {
				reject(err)
				console.log('erroorrre', err);
				// return this.utils.toast({
				// 	/* message: err.error.message, */
				// 	message: 'Email ou senha inválidos',
				// 	duration: 10000,
				// 	action: 'Ok'
				// });
			});
		});
	}

	register(data: any): any {
		return new Promise<void>((resolve, reject) => {
			this.http.post('user/user/create', false, data).then(res => {
				console.log('REGISTER RESPONSE', res);
				this.setToken(res.token).then(() => {
					resolve();
				});
			}).catch(err => {
				// console.log("erroorrre", err.error.message);
				reject(err)
				// return this.utils.toast({
				// 	/* message: err.error.message, */
				// 	message: 'Este usuário já está cadastrado, tente novamente com outro email.',
				// 	duration: 10000,
				// 	action: 'Ok'
				// });
			});
		});
	}

	logout() {
		return new Promise<void>((resolve, reject) => {
			localStorage.clear();
			resolve();
		}).catch(err => console.log('Error trying to log you out: ', err));
	}

	setToken(token: string): any {
		return new Promise<void>((resolve, reject) => {
			this.http.setToken(token).then(() => {
				this.me().then((r) => {
					resolve();
				});
			});
		}).catch(err => console.log('Error trying to set token: ', err));
	}

	me() {
		return new Promise<void>((resolve, reject) => {
			this.http.get('api/user/user/getProtected', true).then((auth: any) => {
				console.log('PROTECTED RESPONSE: ', auth);
				localStorage.setItem('user', JSON.stringify(auth));
				resolve();
			})
			.catch(err => {
				localStorage.clear();
				// localStorage.removeItem('user');
				this.router.navigate(['/entrar']);
				reject(err);
			});
		});
	}

	// forgotPassword(data: any): any {
	// 	return new Promise<void>((resolve, reject) => {
	// 		this.http.post('api/users/forgotPassWord', false, data).then((res) => {
	// 			console.log('E-mail enviado!');
	// 			this.utils.toast({
	// 				message: res.message,
	// 				duration: 10000,
	// 				action: 'Ok'
	// 			});
				
	// 			resolve();
	// 		}).catch(err => reject(err));
	// 	});
	// }
}


