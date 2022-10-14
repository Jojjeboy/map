import { Component, OnInit } from '@angular/core';
import { TallyService } from '../../tally-service';
import { LsTypeEnum } from '../../LsTypeEnum';

@Component({
  selector: 'app-workoutchamp-start',
  templateUrl: './workoutchamp-start.component.html',
  styleUrls: ['./workoutchamp-start.component.scss']
})
export class WorkoutchampStartComponent implements OnInit {
  private priceOfWorkoutSubscription: number = 2995;
  private priceOfWorkoutCard: number = 100;
  private healthCareAllowance: number = 2500;
  public nrOfGymWorkoutsCompleted: number = 0;
  public nrOfHomeWorkoutsCompleted: number = 0;
  public priceOfEachVisit: number = this.priceOfWorkoutSubscription + this.priceOfWorkoutCard - this.healthCareAllowance;
  public resetBtnIsVisible: boolean = false;
  public showGymResetBtn: boolean = false;
  public showHomeResetBtn: boolean = false;

  /**
   * Current value
   * Home workout: 2
   * Gym workout: 1
   * 
   */

  constructor(private tallyService: TallyService) { }

  ngOnInit() {
    this.getCount();
  }

  public getCount() {
    const gymLsValue = this.tallyService.getCounter(LsTypeEnum.gymKey.toString());
    const homeWorkoutLsValue = this.tallyService.getCounter(LsTypeEnum.homeWorkout.toString());
    if (gymLsValue > this.nrOfGymWorkoutsCompleted) {
      this.nrOfGymWorkoutsCompleted = gymLsValue;
    }
    else {
      this.tallyService.saveCounter(LsTypeEnum.gymKey.toString(), this.nrOfGymWorkoutsCompleted);
    }
    if (homeWorkoutLsValue > this.nrOfHomeWorkoutsCompleted) {
      this.nrOfHomeWorkoutsCompleted = homeWorkoutLsValue;
    }
    else {
      this.tallyService.saveCounter(LsTypeEnum.homeWorkout.toString(), this.nrOfHomeWorkoutsCompleted);
    }
    this.recalculateGymPrice();
  }


  public increase(key: string) :void {
    if(key === LsTypeEnum.gymKey){
      this.nrOfGymWorkoutsCompleted += 1;
      this.tallyService.saveCounter(LsTypeEnum.gymKey.toString(), this.nrOfGymWorkoutsCompleted);
      this.recalculateGymPrice();
    }
    else if(key === LsTypeEnum.homeWorkout){
      this.nrOfHomeWorkoutsCompleted += 1;
      this.tallyService.saveCounter(LsTypeEnum.homeWorkout.toString(), this.nrOfHomeWorkoutsCompleted);
    }
  }


  public decrease(key: string) :void {
    if(key === LsTypeEnum.gymKey){
      if (this.nrOfGymWorkoutsCompleted > 0) {
        this.nrOfGymWorkoutsCompleted -= 1;
        this.tallyService.saveCounter(LsTypeEnum.gymKey.toString(), this.nrOfGymWorkoutsCompleted);
        this.recalculateGymPrice();
      }
    }
    else if(key === LsTypeEnum.homeWorkout){
      if (this.nrOfHomeWorkoutsCompleted > 0) {
        this.nrOfHomeWorkoutsCompleted -= 1;
        this.tallyService.saveCounter(LsTypeEnum.homeWorkout.toString(), this.nrOfHomeWorkoutsCompleted);
      }
    }
  }
    
    
  

  public increaseGym() {
    this.nrOfGymWorkoutsCompleted += 1;
    this.tallyService.saveCounter(LsTypeEnum.gymKey.toString(), this.nrOfGymWorkoutsCompleted);
    this.recalculateGymPrice();
  }

  public decreaseGym() {
    if (this.nrOfGymWorkoutsCompleted > 0) {
      this.nrOfGymWorkoutsCompleted -= 1;
      this.tallyService.saveCounter(LsTypeEnum.gymKey.toString(), this.nrOfGymWorkoutsCompleted);
      this.recalculateGymPrice();
    }
  }

  public increaseHomeWorkout() {
    this.nrOfHomeWorkoutsCompleted += 1;
    this.tallyService.saveCounter(LsTypeEnum.homeWorkout.toString(), this.nrOfHomeWorkoutsCompleted);
  }

  public decreaseHomeWorkout() {
    this.nrOfHomeWorkoutsCompleted -= 1;
    this.tallyService.saveCounter(LsTypeEnum.homeWorkout.toString(), this.nrOfHomeWorkoutsCompleted);
  }

  public reset(key: string): void {    
    if(key === LsTypeEnum.gymKey){
      this.nrOfGymWorkoutsCompleted = 0;
      this.tallyService.saveCounter(key, 0);
    }
    else if(key === LsTypeEnum.homeWorkout){
      this.nrOfHomeWorkoutsCompleted = 0;
      this.tallyService.saveCounter(key, 0);
    }
    
    this.showGymResetBtn = false;
    this.showHomeResetBtn = false;
  }

  public showResetButton(key: string) {
    if (key === LsTypeEnum.gymKey || key === LsTypeEnum.homeWorkout) {
      key === LsTypeEnum.gymKey ? this.showGymResetBtn = true : this.showHomeResetBtn = true;
    }
  }

  private recalculateGymPrice() {
    if (this.nrOfGymWorkoutsCompleted > 0) {
      this.priceOfEachVisit = (this.priceOfWorkoutSubscription + this.priceOfWorkoutCard - this.healthCareAllowance) / this.nrOfGymWorkoutsCompleted
    }
  }

  public toggleResetVisibility() {
    this.resetBtnIsVisible = !this.resetBtnIsVisible;
  }
}