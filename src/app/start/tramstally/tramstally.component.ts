import { Component, OnInit } from '@angular/core';
import { TramstallyService } from './tramstally.service';

@Component({
  selector: 'app-tramstally',
  templateUrl: './tramstally.component.html',
  styleUrls: ['./tramstally.component.scss']
})
export class TramstallyComponent implements OnInit {

  public appName: string = 'tramstally';
  public nrOfUnpaidRides = 0;
  public ticketcost: number = 35;
  public fine: number = -1500;
  public balance: number = 0;
  public nrOfUnpaidRidesLeft: number = 0;
  public counters: any;

  constructor(private tramstallyService: TramstallyService){}

  ngOnInit(){
    this.getCount();
    this.reCalculate();
  }

  public getCount() {
    let lsCounters = this.tramstallyService.getCounter(this.appName);
    this.counters = lsCounters;
  }

  public increase(){
    this.counters.freeRides.data += 1;
    this.tramstallyService.saveCounter(this.appName, this.counters);
    this.reCalculate();
  }

  public decrease(){
    if(this.counters.freeRides.data > 0){
    this.counters.freeRides.data -= 1;
    this.tramstallyService.saveCounter(this.appName, this.counters);
      this.reCalculate();
    }
  }

  public reCalculate(){
    this.balance = this.fine + (this.ticketcost * this.counters.freeRides.data)
    this.nrOfUnpaidRidesLeft = Math.floor(this.fine / this.ticketcost) + this.counters.freeRides.data;
  }

}
