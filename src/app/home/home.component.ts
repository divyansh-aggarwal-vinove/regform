import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { fromEventPattern } from 'rxjs';
import { registerLocaleData } from '@angular/common';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  registrationForm: FormGroup;

  empList = [];

  get empName() {
    return this.registrationForm.get('empName');
  }

  get age() {
    return this.registrationForm.get('age');
  }

  get cNo() {
    return this.registrationForm.get('cNo');
  }

  get addrr() {
    return this.registrationForm.get('addrr');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get bbio() {
    return this.registrationForm.get('bbio');
  }

  constructor(private fb: FormBuilder, private _registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      empName: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/admin/), Validators.pattern(/password/)]],
      age: ['', [Validators.required, Validators.max(99)]],
      cNo: ['', [Validators.required]],
      addrr: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bbio: ['']
    });
  }

  onSubmit() {
    console.log(this.empList.length);
    const sds = JSON.parse(localStorage.getItem("emp_data"));

    if (this.empList.length == 0) {
      localStorage.setItem('emp_data', JSON.stringify(this.empList));
    }

    if (this.empList.length != null && sds.length != null) {

      //console.log("sds length " + sds.length)

      for (var i = 0; i < sds.length; i++) {
        this.empList[i] = sds[i];
        //console.log("sds", sds[i]);
      }

      //console.log(this.registrationForm.value);

      this.empList.push(this.registrationForm.value);

      //console.log(this.empList);

      localStorage.setItem('emp_data', JSON.stringify(this.empList));


    }


    //console.log(JSON.parse(localStorage.getItem("emp_data")));

    // if(this.empList.length == 0){
    //   const sds = JSON.parse(localStorage.getItem("emp_data"));
    //   console.log("sds length " + sds.length)
    //   for(var i = 0; i < sds.length; i++){
    //     this.empList[i] = sds[i];
    //     console.log("sds",sds[i]);
    //   }
    // }

    // console.log(this.registrationForm.value);
    // this.empList.push(this.registrationForm.value);
    // console.log(this.empList);

    // localStorage.setItem('emp_data', JSON.stringify(this.empList));

    // this._registrationService.register(this.registrationForm.value)
    //   .subscribe(
    //     response => console.log('Success', response),
    //     error => console.log('Error', error)
    //   );

    //this.registrationForm.reset();

    // var yObj = JSON.parse(localStorage.getItem('emp_data'));
    // console.log(yObj);
  
  }





  // registrationForm = new FormGroup({
  //   empName: new FormControl(''),
  //   age: new FormControl(''),
  //   cNo: new FormControl(''),
  //   addrr: new FormControl(''),
  //   email: new FormControl(''),
  //   bbio: new FormControl('')
  // });
}
