import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from '../shared/local-storage-service';

@Injectable({
  providedIn: 'root'
})
export class TramstallyService {

  constructor(private lsService: LocalStorageServiceService) { }
  public defaultData = {freeRides: {data: 0}}

  public saveCounter(app: string, value: any){
    this.lsService.saveData(app, JSON.stringify(value));
  }

  public getCounter(app: string): any {
    let counter = this.lsService.getData(app, this.defaultData);
    return JSON.parse(counter);

  }

}
