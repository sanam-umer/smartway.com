import { Component, OnInit } from '@angular/core';
import { DatasService } from '../datas.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private service:DatasService) { }
  serviceData:any;
  ngOnInit(): void {
    this.serviceData = this.service.serviceDetails;
  }
}
