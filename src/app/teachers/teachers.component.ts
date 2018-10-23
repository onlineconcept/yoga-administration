import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  showFilters = true;
  constructor() { }

  ngOnInit() {
  }
  seachButton() {
    this.showFilters = false;
  }

}
