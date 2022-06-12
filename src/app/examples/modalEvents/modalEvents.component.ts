import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from 'app/providers/services.service';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';

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
    private ServiceProvider: ServicesService,
    private router: Router,
  ) { }
  selectDay(event) {
    localStorage.setItem('service', JSON.stringify(event));
    console.log(event);
    return this.router.navigateByUrl('/admin/calendar');
 }
  ngOnInit() {
    console.log("DEU CERTO", this.eventData)
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
      // element.startDate = new Date(element.startDate).toLocaleTimeString().slice(0, -3) 
      // element.endDate = new Date(element.endDate).toLocaleTimeString().slice(0, -3) 
      if(element.createdBy === userStorage._id){
        element.isMe = true
      }else{
        element.isMe = false
      }
      eventsFormated.push(element);
    }
    this.dataArray = eventsFormated
    console.log("ta formatado?", this.dataArray);
  }
}
