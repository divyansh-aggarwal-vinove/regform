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
    //let su = [""];
  }

  sdat = JSON.parse(localStorage.getItem("emp_data"));

  onEdit(id) {
    // console.log("Edit id is: " + id);
    // console.log(this.sdat[id]);
    localStorage.setItem('iden',id);
  }
  
  cAll(){
    this.sdat.splice(0,this.sdat.length);
    localStorage.setItem('emp_data',JSON.stringify(this.sdat));
  }

  onDel(id) {
    // console.log("Delete id is: " + id);
    // console.log(this.sdat[id]);
    this.sdat.splice(id,1);
    localStorage.setItem('emp_data',JSON.stringify(this.sdat));
  }
}
