import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'app/providers/auth.service';
import { UtilsProvider } from 'commons/utils';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
	user: any = {};
    constructor(
        public utils: UtilsProvider,
        public AuthProvider: AuthService,
		private router: Router,
		private toastr: ToastrService
    ) { }

    async ngOnInit() {
	}
  
    onSubmit() {
		if (!this.user.email || !this.user.password || !this.user.confirmPassword || !this.user.name || !this.user.lastName ) 
		{ return this.toastr.error("Preencha os dados corretamente", 'Erro!') }
		  const params = {...this.user};
		  this.AuthProvider.register(params).then((res)=>{
			setTimeout(() => {
				this.toastr.success('Perfil criado com sucesso!', 'Criado!');
				return this.router.navigateByUrl('/login');
  			}, 4000);
		  }).catch(err => this.toastr.error(err, 'Erro!'))
	}
}
