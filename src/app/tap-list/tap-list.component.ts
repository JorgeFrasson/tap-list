import { Component, OnInit } from '@angular/core';
import { StatusService } from '../shared/status.service';

@Component({
  selector: 'app-tap-list',
  templateUrl: './tap-list.component.html',
  styleUrls: ['./tap-list.component.scss']
})
export class TapListComponent implements OnInit {

  tapList: any[] = [];

  constructor(private tapService: StatusService) { }

  ngOnInit(): void {
    this.getTapList();
  }
  
  async getTapList(){
    await this.tapService.getStatus()
        .subscribe((response) => {
          const res = JSON.parse(JSON.stringify(response));
          this.tapList = res;
          console.log(this.tapList);
    });
  }

}
