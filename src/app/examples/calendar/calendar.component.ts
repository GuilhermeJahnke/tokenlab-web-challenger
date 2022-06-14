import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from 'app/providers/calendar.service';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';
import { ToastrService } from 'ngx-toastr';
import { ModalEventsComponent } from '../modalEvents/modalEvents.component';
import { ModalEventsActionComponent } from '../modalEventsAction/modalEventsAction.component';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  focus: any;
  focus1: any;
  dataArray: EventData[];
  serviceSelected: any;
  constructor(
    private CalendarProvider: CalendarService,
    private modalService: NgbModal,
    private toastr: ToastrService
  ) { }
  selectDay(event) {
    const modalRef = this.modalService.open(ModalEventsComponent);
    modalRef.componentInstance.eventData = event;
 }
  addEvent() {
    const modalRef = this.modalService.open(ModalEventsActionComponent);
 }
  ngOnInit() {
    var service = JSON.parse(localStorage.getItem('service'))
    var params = {
      initAt: "2018-01-06T22:30:00.000Z",
      endAt: "2025-09-06T23:30:00.000Z",
      serviceID: service._id
    }
    this.CalendarProvider.getAvailableHours(params).then((res)=>{
      var teste = this.formateEvent(res);
      this.dataArray = teste
	  }).catch(err =>{
      return this.toastr.error(err, 'Erro!',)
    } )
  }

  refreshCalendar(){
    var service = JSON.parse(localStorage.getItem('service'))
    var params = {
      initAt: "2018-01-06T22:30:00.000Z",
      endAt: "2025-09-06T23:30:00.000Z",
      serviceID: service._id
    }
    this.CalendarProvider.getAvailableHours(params).then((res)=>{
      var teste = this.formateEvent(res);
      this.dataArray = teste
	  }).catch(err =>{
      return this.toastr.error(err, 'Erro!',)
    } )
  }


  formateEvent(event){
    var userInfo = JSON.parse(localStorage.getItem('user'))
    var eventsFormated = [];
    for (let i = 0; i < event.length; i++) {
      const element = event[i];
      var item = {
        id: element._id,
        title: element.title,
        desc: element.description,
        startDate: new Date(element.initAt),
        endDate: new Date(element.endAt),
        createdBy: element.userRef,
        type: 1,
        color: userInfo._id == element.userRef ? "green": "red"
      }
      eventsFormated.push(item);
    }
    return eventsFormated;
  }


}
