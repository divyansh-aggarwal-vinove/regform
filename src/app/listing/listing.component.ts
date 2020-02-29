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

  onEdit(){}
  onDel(){}
}
