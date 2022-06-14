import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/providers/auth.service';
import { UtilsProvider } from 'commons/utils';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
	user: any = {};
    constructor(
        public utils: UtilsProvider,
        public AuthProvider: AuthService,
		private router: Router,
		private toastr: ToastrService
    ) { }

  
    onSubmit() {
		if (!this.user.login || !this.user.password  ) 
		{ return this.toastr.error("Parametros invalidos", 'Erro!') }
	
	
		  const params = {...this.user};
		  this.AuthProvider.login(params).then((res)=>{
			this.toastr.success( 'Bem Vindo!', 'Sucesso!');
			setTimeout(() => {
						  return this.router.navigateByUrl('/admin/servicos');
			}, 2000);
		  }).catch(err => this.toastr.error(err, 'Erro!'))
	 
	}
}
