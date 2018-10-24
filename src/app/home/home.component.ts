import { Component, OnInit } from '@angular/core';
import { CustomerStatusService } from '../../_services/customer-status.service';
import { CustomerStatus } from '../../_models/customer-status';
import { AlertifyService } from '../../_services/alertify.service';
import { Category } from '../../_models/category';
import { CategoryService } from 'src/_services/category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customerStatuses: CustomerStatus[];
  categories: Category[];


  showFilters = true;
  constructor(private customerStatusService: CustomerStatusService,
              private categoryService: CategoryService,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadCustomerStatuses();
    this.loadCategories();
  }
  seachButton() {
    this.showFilters = false;
  }
  loadCustomerStatuses() {
    this.customerStatusService.getStatuses().subscribe((res: CustomerStatus[]) => {
      this.customerStatuses = res;
    }, err => this.alertify.error(err));
  }
  loadCategories() {
    this.categoryService.getCategories().subscribe((res: Category[]) => {
      this.categories = res;
    }, err => this.alertify.error(err));
  }
}
