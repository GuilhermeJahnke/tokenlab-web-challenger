import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'app/providers/auth.service';
import { ServicesService } from 'app/providers/services.service';
import { UtilsProvider } from 'commons/utils';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';
import { ToastrService } from 'ngx-toastr';

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
      private toastr: ToastrService
  ) { }

  async ngOnInit() {
    var userStorage = JSON.parse(localStorage.getItem('user'))
    this.userName = userStorage.userInfo.name;
    this.user = userStorage;
    this.user.name = userStorage.userInfo.name
    this.user.lastName = userStorage.userInfo.lastName
}

  onSubmit() {
    const params = {...this.user};
    this.AuthProvider.update(params).then((res)=>{
      this.toastr.success('Perfil Atualizado com sucesso!', 'Atualizado!' );
    }).catch(err => this.toastr.error( err, 'Erro!'))
 
}

}
