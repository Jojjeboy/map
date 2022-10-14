import { Injectable } from '@angular/core';
import { LocalStorageServiceService } from './shared/local-storage-service';
import { LsTypeEnum } from './LsTypeEnum';

@Injectable()
export class TallyService {

  
  constructor(private lsService: LocalStorageServiceService) { }
  public defaultData = {gymWorkout: {data: 0},homeWorkout: {data: 0}}

  public saveCounter(app: string, value: any){
    this.lsService.saveData(app, JSON.stringify(value));
  }

  public getCounter(app: string): any {
    let counter = this.lsService.getData(app, this.defaultData);
    return JSON.parse(counter);
    
  }

  public clearCounter(key: string): void {
    if(key === LsTypeEnum.gymWorkout.toString() || key === LsTypeEnum.homeWorkout.toString()){
      this.lsService.removeData(key);
    }
  }

}