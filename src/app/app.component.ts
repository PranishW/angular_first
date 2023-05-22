import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User Registration Form';
  dname = ""
  demail = ""
  dphone = ""
  getValues(val:any)
  {
    this.dname = val.name
    this.demail = val.email
    this.dphone = val.phone
  }
}
