import { Component, OnInit, ViewChild } from '@angular/core';
import {environment} from '../../../environments/environment';
import { AlertifyService } from '../../../_services/alertify.service';
import { CustomerStatus } from '../../../_models/customer-status';
import { CustomerStatusService } from '../../../_services/customer-status.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-customer-status',
  templateUrl: './customer-status.component.html',
  styleUrls: ['./customer-status.component.scss']
})
export class CustomerStatusComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  customerStatus: CustomerStatus = {id: '', name: '', price: 0};
  baseUrl = environment.apiUrl;
  customerStatuses: CustomerStatus[];
  constructor( private alertify: AlertifyService, private customerStatusService: CustomerStatusService) { }

  ngOnInit() {
    this.loadCustomerStatuses();
  }

  loadCustomerStatuses() {
    this.customerStatusService.getStatuses().subscribe((res: CustomerStatus[]) => {
      this.customerStatuses = res;
    }, err => this.alertify.error(err));
  }

  addCustomerStatus() {
    this.customerStatusService.createStatus(this.customerStatus).subscribe(next => {
      this.alertify.success('Customer status updated Successfully');
      this.customerStatuses.push(next);
      this.editForm.reset();
    }, err => this.alertify.error(err));
  }

  editCustomerStatus(id) {
    alert('edit ' + id);
    this.loadCustomerStatuses();
  }

  deleteCustomerStatus(id) {
    this.customerStatusService.deleteStatus(id).subscribe(() => {
      this.customerStatuses.splice(this.customerStatuses.findIndex(p => p.id === id), 1);
      this.alertify.success('Customer status deleted Successfully');
    }, err => this.alertify.error(err));
  }
}
