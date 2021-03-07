import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { AccountService } from '../_services';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  user: User;

  constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
  }

  ngOnInit(): void {
  }

}
