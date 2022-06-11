import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'app/providers/services.service';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';

@Component({
    selector: 'app-chooseService',
    templateUrl: './chooseService.component.html',
    styleUrls: ['./chooseService.component.scss']
})

export class ChooseServiceComponent implements OnInit {
  focus: any;
  focus1: any;
  dataArray: any ;
  constructor(
    private ServiceProvider: ServicesService,
  ) { }
  selectDay(event) {
    console.log(event);
 }
  ngOnInit() {
    this.ServiceProvider.getAll().then((res)=>{
			console.log("this is allcalendar", res);
      this.dataArray = res;
	  })
  }

}
