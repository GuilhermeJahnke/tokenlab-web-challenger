import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from 'app/providers/calendar.service';
import { ServicesService } from 'app/providers/services.service';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-modalEventsAction',
    templateUrl: './modalEventsAction.component.html',
    styleUrls: ['./modalEventsAction.component.scss']
})

export class ModalEventsActionComponent {
  focus: any;
  focus1: any;
  service: any ;
  eventData: any;
  eventDay: any;
  eventsEdit: Boolean = false;
  event: any = {};
  time = {hour: 13, minute: 30};
  date: {year: number, month: number};
  dateInit: NgbDateStruct;
  dateEnd: NgbDateStruct;
  constructor(
    private CalendarProvider: CalendarService,
    private router: Router,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }
  isWeekend(date: NgbDateStruct) {
    const d = new Date(date.year, date.month - 1, date.day);
    return d.getDay() === 0 || d.getDay() === 6;
}

isDisabled(date: NgbDateStruct, current: {month: number}) {
    return date.month !== current.month;
}
  onSubmit() {
		if (!this.event.title || !this.event.description || !this.event.initAt || !this.event.endAt  ) 
		{ return this.toastr.error('Preencha os dados corretamente!', 'Inválido!'); }
	
    var service = JSON.parse(localStorage.getItem('service'))
		  const params = {...this.event, serviceRef: service._id };
		  this.CalendarProvider.create(params).then((res)=>{
        this.modalService.dismissAll();
        this.toastr.success('Horario criado com sucesso!', 'Criado!');
		  }).catch(err => this.toastr.error(err, "Erro!"))
	}
  onEdit() {
    var service = JSON.parse(localStorage.getItem('service'))
    console.log(this.event)
		  const params = {
        initAt: this.event.initAt,
          endAt: this.event.endAt,
          description: this.event.description,
          title: this.event.title,
          eventID: this.event.id,
          serviceRef: service._id
      };
		  this.CalendarProvider.update(params).then((res)=>{
        this.modalService.dismissAll();
        this.toastr.success('Horario atualizado com sucesso!', 'Atualizado!');
		  }).catch(err => this.toastr.error(err, "Erro!"))
	}
  
}
