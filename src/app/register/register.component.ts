import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router, UrlTree, UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { sharedStylesheetJitUrl } from '@angular/compiler';
import { fromEventPattern } from 'rxjs';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;

  empList = [];

  isRegister;

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
  
  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.registrationForm = this.fb.group({
      empName: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required, Validators.max(99)]],
      cNo: ['', [Validators.required]],
      addrr: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      bbio: ['']
    });
    this.isRegister = true;

    const tree: UrlTree = this.router.parseUrl(this.router.url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    const s: UrlSegment[] = g.segments;

    if(s[0].path == "edit"){
    const id: string = this.route.snapshot.paramMap.get('id');
    let sdat = JSON.parse(localStorage.getItem("emp_data"));
    this.registrationForm.patchValue({
      ...sdat[id]
    })

    this.isRegister = false;
    }

  }


  onSubmit() {

    if (localStorage.getItem('emp_data') == null) {
      this.empList.push(this.registrationForm.value);
      localStorage.setItem('emp_data', JSON.stringify(this.empList));
    }

    else {
      const fr = localStorage.getItem("emp_data");
      const sds = JSON.parse(fr);
      for (var i = 0; i < sds.length; i++) {
        this.empList[i] = sds[i];
      }

      this.empList.push(this.registrationForm.value);
      localStorage.setItem('emp_data', JSON.stringify(this.empList));

    }

    this.registrationForm.reset();
    alert("New Employee has been registered successfully!!");
    this.router.navigate(['']);
    
  }
  
  
  yy = localStorage.getItem('iden');
  sdat = JSON.parse(localStorage.getItem("emp_data"));

  onUpdate() {

    this.empList.push(this.registrationForm.value);

    for(var i = 0; i < this.empList.length; i++){
      this.sdat[this.yy[i]] = this.empList[i];
    }
    localStorage.setItem('emp_data',JSON.stringify(this.sdat));

    alert("Changes have been saved successfully!!");
    this.router.navigate(['']);
    
  }
}



