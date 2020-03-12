import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    let sdat = "";
    //let su = [""];
  }

  sdat = JSON.parse(localStorage.getItem("emp_data"));

  onEdit(id) {
    // console.log("Edit id is: " + id);
    // console.log(this.sdat[id]);
    localStorage.setItem('iden',id);
    this.router.navigate(['/edit/',id]);
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
