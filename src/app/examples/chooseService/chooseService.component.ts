import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router,
  ) { }
  selectDay(event) {
    localStorage.setItem('service', JSON.stringify(event));
    console.log(event);
    return this.router.navigateByUrl('/admin/calendar');
 }
  ngOnInit() {
    this.ServiceProvider.getAll().then((res)=>{
			console.log("this is allcalendar", res);
      this.dataArray = res;
	  })
  }

}
