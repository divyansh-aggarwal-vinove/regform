import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  get empName(){
    return this.registrationForm.get('empName');
  }

  get age(){
    return this.registrationForm.get('age');
  }

  get cNo(){
    return this.registrationForm.get('cNo');
  }

  get addrr(){
    return this.registrationForm.get('addrr');
  }

  get email(){
    return this.registrationForm.get('email');
  }

  get bbio(){
    return this.registrationForm.get('bbio');
  }


  constructor(private fb: FormBuilder){}

    registrationForm = this.fb.group({
      empName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/admin/), Validators.pattern(/password/)]],
      age: ['', [Validators.required, Validators.max(99)]],
      cNo: ['',[Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      addrr: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      bbio: ['']
    });
  
  
  // registrationForm = new FormGroup({
  //   empName: new FormControl(''),
  //   age: new FormControl(''),
  //   cNo: new FormControl(''),
  //   addrr: new FormControl(''),
  //   email: new FormControl(''),
  //   bbio: new FormControl('')
  // });
}
