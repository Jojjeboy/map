import { Component, OnInit } from '@angular/core';
import { TallyService } from './tally-service';
import { LsTypeEnum } from './LsTypeEnum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.params.subscribe(data => {
      console.log(data);
    })
  }
}