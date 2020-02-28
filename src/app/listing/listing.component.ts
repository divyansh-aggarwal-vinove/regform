import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  seDat() {
    const s = JSON.parse(localStorage.getItem("emp_data"));
    let val = "<table class = 'table table-dark' style = 'background-color:#181818'><thead><tr>";
    val = val + "<th scope='col'>#</th><th scope='col'>Employee Name</th><th scope='col'>Age</th><th scope='col'>Contact No.</th><th scope='col'>Address</th><th scope='col'>Email</th><th scope='col'>Bio</th></tr></thead>";
    
    for (var i = 0; i < s.length; i++) {
      var sd = "<tr><td scope='row'>" + [i + 1] + "</td><td scope='row'>" + s[i].empName + "</td><td>" + s[i].age + "</td><td>" + s[i].cNo + "</td><td>" + s[i].addrr + "</td><td>" + s[i].email + "</td><td>" + s[i].bbio + "</td></tr>"
      val = val + sd;
    }

    val = val + " </tr></table>";
    document.getElementById("view").innerHTML = val;
  }

}
