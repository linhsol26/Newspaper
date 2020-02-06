import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(public activatedRouter: ActivatedRoute, public dataService: DataService) { }

  details: any;

  async ngOnInit() {
     this.activatedRouter.params.subscribe(async (params) => {
      if (this.dataService.db === null) {
        await this.dataService.randomRouting();
      }
      this.details = this.dataService.query(params.name);
    });
  }
}
