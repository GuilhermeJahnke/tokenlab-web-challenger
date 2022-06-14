import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from 'app/providers/calendar.service';
import { ServicesService } from 'app/providers/services.service';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-service',
    templateUrl: './service.component.html',
    styleUrls: ['./service.component.scss']
})

export class ServiceComponent  {
  focus: any;
  focus1: any;
  service: any = {};
  constructor(
    private ServiceProvider: ServicesService,
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }

  onSubmit() {
		if (!this.service.title || !this.service.description ) 
		{ return this.toastr.error('Preencha os dados corretamente!', 'Inválido!'); }
	
		  const params = {...this.service };
		  this.ServiceProvider.create(params).then((res)=>{
        this.modalService.dismissAll();
        this.toastr.success('Serviço criado com sucesso!', 'Criado!');
		  }).catch(err => this.toastr.error(err, "Erro!"))
	}
  
}
