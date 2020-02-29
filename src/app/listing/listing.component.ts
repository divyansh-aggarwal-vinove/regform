import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let sdat = "";
  }

  sdat = JSON.parse(localStorage.getItem("emp_data"));

  onEdit(id) {
    console.log("Edit id is: " + id);
    console.log(this.sdat[id]);
  }
  
  onDel(id) {
    // console.log("Delete id is: " + id);
    // console.log(this.sdat[id]);
    this.sdat.splice(id,1);
    localStorage.setItem('emp_data',JSON.stringify(this.sdat));
  }
}
