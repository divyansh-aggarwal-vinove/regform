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
  }

  sdat = JSON.parse(localStorage.getItem("emp_data"));

  onEdit(id) {
    localStorage.setItem('iden',id);
    this.router.navigate(['/edit/',id]);
  }
  
  cAll(){
    this.sdat.splice(0,this.sdat.length);
    localStorage.setItem('emp_data',JSON.stringify(this.sdat));
  }

  onDel(id) {
    this.sdat.splice(id,1);
    localStorage.setItem('emp_data',JSON.stringify(this.sdat));
  }
}
