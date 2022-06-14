import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServicesService } from 'app/providers/services.service';
import { EventData } from 'ngx-event-calendar/lib/interface/event-data';
import { ToastrService } from 'ngx-toastr';
import { ServiceComponent } from '../service/service.component';

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
    private toastr: ToastrService,
    private modalService: NgbModal,
  ) { }
  selectDay(event) {
    localStorage.setItem('service', JSON.stringify(event));
    return this.router.navigateByUrl('/admin/calendar');
 }
 createService() {
  const modalRef = this.modalService.open(ServiceComponent);
}
  ngOnInit() {
    this.ServiceProvider.getAll().then((res)=>{
      this.dataArray = res;
	  }).catch(err => this.toastr.error(err, 'Erro!'))
  }

}
