import { Component } from '@angular/core';

import { AccountService } from '../_services';
import { User } from '../_models';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  user: User;

  constructor(public accountService: AccountService) {
      this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
      this.accountService.logout();
  }

  admin(username: string){
    console.log('ADMIN' ,this.user.username);
    this.accountService.admin(this.user.username);
  }
}


