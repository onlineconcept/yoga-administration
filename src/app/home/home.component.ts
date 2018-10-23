import { Component, OnInit } from '@angular/core';
import { CustomerStatusService } from 'src/_services/customer-status.service';
import { CustomerStatus } from 'src/_models/customer-status';
import { AlertifyService } from 'src/_services/alertify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customerStatuses: CustomerStatus[];


  showFilters = true;
  constructor(private customerStatusService: CustomerStatusService, private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadCustomerStatuses();
  }
  seachButton() {
    this.showFilters = false;
  }
  loadCustomerStatuses() {
    this.customerStatusService.getStatuses().subscribe((res: CustomerStatus[]) => {
      this.customerStatuses = res;
    }, err => this.alertify.error(err));
  }
}
