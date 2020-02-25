import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({
    empName: new FormControl(''),
    age: new FormControl(''),
    cNo: new FormControl(''),
    addrr: new FormControl(''),
    email: new FormControl(''),
    bbio: new FormControl('')
  })
}
