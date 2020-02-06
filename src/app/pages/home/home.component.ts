import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public dataservice: DataService, public router: Router) {
  }
  ngOnInit() {
  }

  getDetails(name) {
    this.router.navigate(['/details/' + name]);
  }
}
