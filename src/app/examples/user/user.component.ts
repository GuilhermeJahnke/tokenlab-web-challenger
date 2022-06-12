import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/providers/auth.service';
import { ServicesService } from 'app/providers/services.service';
import { UtilsProvider } from 'commons/utils';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit {
  user: any = {};
  user_Local: any;
  public userName: String;
  constructor(
      public utils: UtilsProvider,
      public AuthProvider: AuthService,
  private router: Router,
  ) { }

  async ngOnInit() {
    var userStorage = JSON.parse(localStorage.getItem('user'))
    this.userName = userStorage.userInfo.name;
    console.log("AAAAAAAAAAAAAA", userStorage)
}

  onSubmit() {

    const params = {...this.user};
    this.AuthProvider.update(params).then((res)=>{
    console.log(res);
    
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
