import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from 'app/providers/calendar.service';
import { ServicesService } from 'app/providers/services.service';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';
import { ToastrService } from 'ngx-toastr';
import { ModalEventsActionComponent } from '../modalEventsAction/modalEventsAction.component';

@Component({
    selector: 'app-modalEvents',
    templateUrl: './modalEvents.component.html',
    styleUrls: ['./modalEvents.component.scss']
})

export class ModalEventsComponent implements OnInit {
  focus: any;
  focus1: any;
  dataArray: any ;
  eventData: any;
  eventDay: any;
  eventsRegistred: Boolean = false;
  constructor(
    private CalendarProvider: CalendarService,
    private modalService: NgbModal,
    private datePipe: DatePipe,
    private toastr: ToastrService
  ) { }
  selectDay(event) {
    const modalRef = this.modalService.open(ModalEventsActionComponent);
    modalRef.componentInstance.eventsEdit = true;
    modalRef.componentInstance.event = {
      title: event.title ,
      description: event.desc,
      initAt: this.datePipe.transform( event.startDate,'yyyy-MM-ddThh:mm') ,
      endAt: this.datePipe.transform(  event.endDate,'yyyy-MM-ddThh:mm')
    };
 }
  delete(event) {
    if(confirm("Deseja deletar?")){

		  const params = {_id: event.id };
		  this.CalendarProvider.delete(params).then((res)=>{
        this.modalService.dismissAll();
        this.toastr.success( 'Horario removido com sucesso!', 'Removido!');
		  }).catch(err => this.toastr.error(err, 'Removido!'))
    }
 }
  ngOnInit() {
    this.eventDay = {
      day: this.eventData.day,
      month: this.eventData.month,
      year: this.eventData.year

    }
    if(this.eventData.events.length > 0){
      this.eventsRegistred = true
      this.formatDataarray(this.eventData.events)
      
    }
  }
  formatDataarray(event){
    var eventsFormated = [];
    var userStorage = JSON.parse(localStorage.getItem('user'))
    for (let i = 0; i < event.length; i++) {
      const element = event[i];
      element.initAt = new Date(element.startDate).toLocaleString().slice(0, -3) 
      element.endAt = new Date(element.endDate).toLocaleString().slice(0, -3) 
      if(element.createdBy === userStorage._id){
        element.isMe = true
      }else{
        element.isMe = false
      }
      eventsFormated.push(element);
    }
    this.dataArray = eventsFormated
  }
}
