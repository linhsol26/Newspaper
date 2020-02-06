import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ReadNewspaper';

  constructor(public dataservice: DataService) {}

  ngOnInit() {
      if (this.dataservice.db === null) {
        this.dataservice.fetchNews().then((data) => {
        this.dataservice.db = data;
      }).catch(err => console.log('error'));
    }
  }
}
