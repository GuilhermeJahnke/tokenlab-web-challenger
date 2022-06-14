
import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';

import { DOCUMENT } from '@angular/common';


import { MatDrawer } from '@angular/material/sidenav';
import { AuthService } from 'app/providers/auth.service';
import { Router } from '@angular/router';



@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.scss'],
})
export class AdminComponent  {
	title = 'Quero Apoiar - Admin';
	public navOpen = true;

	@ViewChild('depoimentos') depoimentos: ElementRef;
	@ViewChild('produtos') produtos: ElementRef;
	@ViewChild('drawer') public drawer: MatDrawer;
	constructor(
      public AuthProvider: AuthService,
	  private router: Router,
		@Inject(DOCUMENT) private document: Document,
	) { }

	logout() {
        localStorage.clear();
        this.router.navigate(["/home"]);
    }

	
}
