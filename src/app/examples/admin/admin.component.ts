
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
// import { trigger, transition, style, animate } from '@angular/animations';
// import { HttpClient } from '@angular/common/http';
// import { Router, ActivatedRoute } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { Content } from '@angular/compiler/src/render3/r3_ast';
// import { MatStepper } from '@angular/material/stepper';
// import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import { DOCUMENT } from '@angular/common';
// import { Title, Meta } from '@angular/platform-browser';
// import { MatSnackBar } from '@angular/material/snack-bar';


// import { MatButton } from '@angular/material/button';
import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from 'app/providers/auth.service';
import { Router } from '@angular/router';



@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss'],
	// animations: [
	// 	trigger('fade', [
	// 		transition('void => *', [style({ opacity: 0 }), animate('800ms', style({ opacity: 1 }))]),
	// 		transition('* => void', [style({ opacity: 1 }), animate('800ms', style({ opacity: 0 }))]),
	// 	])
	// ]
})
export class AdminComponent implements OnInit {
	title = 'Quero Apoiar - Admin';
	public navOpen = true;

	@ViewChild('depoimentos') depoimentos: ElementRef;
	@ViewChild('produtos') produtos: ElementRef;
	@ViewChild('drawer') public drawer: MatDrawer;
	constructor(
		// private httpClient: HttpClient,
		// private router: Router,
		// private formBuilder: FormBuilder,
		// private activatedRoute: ActivatedRoute,
		// private titleService: Title,
		// private metaTagService: Meta,
		// private _snackBar: MatSnackBar,
      public AuthProvider: AuthService,
	  private router: Router,
		@Inject(DOCUMENT) private document: Document,
	) { }

	ngOnInit() {
		
		// this.userProvider.checkPaid().then((res: any) =>{
		// 	res.paid ? console.log("Usuário pagou a taxa")
		// 	 : this.openDialog()
		// }).catch((err: any)=>{
		// 	console.log(err)
		// })

		// this.setNavbarStatus()
		// window.scrollTo(0,0)

		// console.log("aaaaaaaaaaaaaac", this.activatedRoute.children)
		// const self = this;
		// if (!localStorage.getItem('user')) {
		// 	this.router.navigate(['/entrar']);
		// }
		// this.ENV.admin = true;
		// this.metaTagService.updateTag(
		// 	{ name: 'description', content: 'Bem vindo ao Quero Apoiar' }
		// );
	}

	ngOnDestroy() {
        // console.log("teste header")
        // this.ENV.admin = false;
	}

	setNavbarStatus() {
		// if (window.innerWidth > 700) this.ENV.open = true
		// else this.ENV.open = false
	}

	setActive(active: any) {
		// this.ENV.active = active
	}

	logout() {
        localStorage.clear();
        this.router.navigate(["/home"]);
    }

	openDialog() {
		// const confirmDialog = this.dialog.open(ModalPaidComponent, {
		// 	disableClose: false,
		// 	data: {
		// 		title: 'Bem-vindo (a) ao QueroApoiar! ',
		// 		message: '<p>Seu perfil está liberado e pronto para ser personalizado e compartilhado com seus amigos, família e apoiadores. Você pode subir sua foto de perfil, capa e apresentar suas propostas. Lembrando que a arrecadação será liberada dia 15 de maio, até essa data as doações estão bloqueadas. Também efetuaremos em alguns dias a cobrança da taxa única de inscrição no valor de R$149,00. QueroApoiar, seu apoio começa aqui! </p>'
		// 	}
		// });
		// confirmDialog.afterClosed().subscribe(result => {
		// 	console.log('RESULT: ', result);
		// 	// if (result === 'false') { console.log("false") }
		// 	// if(result === 'true') { console.log("true"), this.openDialogMAquininha() }
		// });
	}
	
}
