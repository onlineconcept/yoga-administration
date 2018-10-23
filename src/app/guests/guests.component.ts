import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {
  showFilters = true;
  constructor() { }

  ngOnInit() {
  }
  seachButton() {
    this.showFilters = false;
  }

}
