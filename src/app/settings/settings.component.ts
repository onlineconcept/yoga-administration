import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import { AlertifyService } from 'src/_services/alertify.service';
import { CustomerStatus } from 'src/_models/customer-status';
import { CustomerStatusService } from 'src/_services/customer-status.service';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }


}
