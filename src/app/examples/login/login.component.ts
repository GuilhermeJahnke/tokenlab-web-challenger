import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/providers/auth.service';
import { UtilsProvider } from 'commons/utils';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	user: any = {};
    constructor(
        public utils: UtilsProvider,
        public AuthProvider: AuthService,
		private router: Router,
    ) { }

    async ngOnInit() {
	}
  
    onSubmit() {
		if (!this.user.login || !this.user.password  ) 
		{ return console.log("error") }
	
	
		  const params = {...this.user};
		  this.AuthProvider.login(params).then((res)=>{
			console.log(res);
			setTimeout(() => {
						  return this.router.navigateByUrl('/admin/servicos');
			}, 50);
		  })
	 
	console.log(this.user);
		// if (!this.user.email || !this.user.password || !this.user.confirmPassword || !this.user.name || !this.user.lastName ) 
		// { return this.toaster.showErrorToast('Erro', 'Preencha corretamente o formulário', 5000); }
	
	
		//   const params = {...this.user};
	
		//   this.service.register(this.strategy, params).subscribe((result: NbAuthResult) => {
		// 	if (result.isSuccess()) {
		// 	  this.toaster.showSuccessToast(`Seja bem vindo à RX-ASSIST, ${this.user.name + "" + this.user.lastName}!`);
		// 	  const redirect = result.getRedirect();
		// 	  if (redirect) {
		// 		setTimeout(() => {
		// 		  return this.router.navigateByUrl('/auth/login');
		// 		}, this.redirectDelay);
		// 	  }
		// 	}
		// 	else {
		// 	  const error = result.getResponse().error.error || result.getResponse().status || 'Não foi possível realizar conexão com o servidor';
		// 	  const errorMessage = result.getResponse().error.message || 'Não foi possível realizar conexão com o servidor';
		// 	  this.toaster.showErrorToast(
		// 		errorMessage,
		// 		'Falha no Cadastro'
		// 	  );
		// 	}
		// 	// this.errors = result.getErrors();
		//   });
	}
}
