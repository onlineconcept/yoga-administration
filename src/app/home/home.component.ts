import { Component, OnInit } from '@angular/core';
import { CustomerStatusService } from '../../_services/customer-status.service';
import { CustomerStatus } from '../../_models/customer-status';
import { AlertifyService } from '../../_services/alertify.service';
import { Category } from '../../_models/category';
import { CategoryService } from '../../_services/category.service';
import { RegionService } from '../../_services/region.service';
import { Region } from '../../_models/region';
import { Service } from '../../_models/service';
import { ServiceService } from '../../_services/service.service';
import { FocusService } from 'src/_services/focus.service';
import { Focus } from '../../_models/focus';
import { Offer } from '../../_models/offer';
import { OfferService } from '../../_services/offer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customerStatuses: CustomerStatus[];
  categories: Category[];
  regions: Region[];
  services: Service[];
  focuses: Focus[];
  offers: Offer[];

  showFilters = true;
  constructor(private customerStatusService: CustomerStatusService,
              private categoryService: CategoryService,
              private regionService: RegionService,
              private serviceService: ServiceService,
              private focusService: FocusService,
              private offerService: OfferService,
              private alertify: AlertifyService) { }

  ngOnInit() {
    this.loadCustomerStatuses();
    this.loadCategories();
    this.loadRegions();
    this.loadServices();
    this.loadFocuses();
    this.loadOffers();
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
  loadRegions() {
    this.regionService.getRegions().subscribe((res: Region[]) => {
      this.regions = res;
    }, err => this.alertify.error(err));
  }
  loadServices() {
    this.serviceService.getServices().subscribe((res: Service[]) => {
      this.services = res;
    }, err => this.alertify.error(err));
  }
  loadFocuses() {
    this.focusService.getFocuses().subscribe((res: Focus[]) => {
      this.focuses = res;
    }, err => this.alertify.error(err));
  }
  loadOffers() {
    this.offerService.getOffers().subscribe((res: Offer[]) => {
      this.offers = res;
    }, err => this.alertify.error(err));
  }
}
