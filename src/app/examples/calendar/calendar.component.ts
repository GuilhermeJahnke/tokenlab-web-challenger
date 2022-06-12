import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarService } from 'app/providers/calendar.service';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';
import { ModalEventsComponent } from '../modalEvents/modalEvents.component';

@Component({
    selector: 'app-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  focus: any;
  focus1: any;
  dataArray: EventData[];
  constructor(
    private CalendarProvider: CalendarService,
    private modalService: NgbModal
  ) { }
  selectDay(event) {
    const modalRef = this.modalService.open(ModalEventsComponent);
    modalRef.componentInstance.name = 'World';
    console.log(event);
 }
  ngOnInit() {
    var service = JSON.parse(localStorage.getItem('service'))
        console.log("this is service", service)
    var params = {
      initAt: "2020-01-06T22:30:00.000Z",
      endAt: "2022-09-06T23:30:00.000Z",
      serviceID: service._id
    }
    this.CalendarProvider.getAvailableHours(params).then((res)=>{
			console.log("this is allcalendar", res);
      var teste = this.formateEvent(res);
      console.log("eventFormated", teste)
      this.dataArray = teste
	  })
  }

  formateEvent(event){
    var eventsFormated = [];
    for (let i = 0; i < event.length; i++) {
      const element = event[i];
      var item = {
        id: element._id,
        title: element.title,
        desc: element.description,
        startDate: new Date(element.initAt),
        endDate: new Date(element.endAt),
        createdBy: "me",
        type: 1,
        color: "red"
      }
      eventsFormated.push(item);
    }
    return eventsFormated;
    // { id: 20, title: 'Match', desc: 'BL Match',
    // startDate: new Date("2019-11-22T21:00:00"), endDate: new Date("2019-11-26T23:00:00"), createdBy: 'Mark',
    // createdAt: new Date("2019-11-10T10:00:00"), type: 2, color: 'red' },
  }

  open() {
    const modalRef = this.modalService.open(CalendarComponent);
    modalRef.componentInstance.name = 'World';
}

}
