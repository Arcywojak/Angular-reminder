import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: any;

  ngOnInit(): void {
    //this.dataService.getData().subscribe(res => {
   //   this.data = res;
    //})
    this.data = this.dataService.getData();
  }

}
