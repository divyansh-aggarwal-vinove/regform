import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    let sdat = JSON.parse(localStorage.getItem("emp_data"));
    let y = localStorage.getItem('iden');

    this.registrationForm = this.fb.group({
      empName: [sdat[y].empName, [Validators.required, Validators.minLength(3)]],
      age: [sdat[y].age, [Validators.required, Validators.max(99)]],
      cNo: [sdat[y].cNo, [Validators.required]],
      addrr: [sdat[y].addrr, Validators.required],
      email: [sdat[y].email, [Validators.required, Validators.email]],
      bbio: [sdat[y].bbio]
    });

  }

  yy = localStorage.getItem('iden');
  sdat = JSON.parse(localStorage.getItem("emp_data"));

  onUpdate() {
    
    console.log(this.yy);
    this.empList.push(this.registrationForm.value);

    for(var i = 0; i < this.empList.length; i++){
      this.sdat[this.yy[i]] = this.empList[i];
    }
    // console.log(this.empList);
    // this.sdat[this.yy] = this.empList;
    // console.log(this.sdat[this.yy]);
    localStorage.setItem('emp_data',JSON.stringify(this.sdat));
    

  }

}
