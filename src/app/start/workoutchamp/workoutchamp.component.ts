import { Component, OnInit } from '@angular/core';
import { TallyService } from '../../tally-service';
import { LsTypeEnum } from '../../LsTypeEnum';

@Component({
  selector: 'app-workoutchamp',
  templateUrl: './workoutchamp.component.html',
  styleUrls: ['./workoutchamp.component.scss']
})
export class WorkoutchampComponent implements OnInit {

  private appName: string = 'workoutchamp';
  private priceOfWorkoutSubscription: number = 2995;
  private priceOfWorkoutCard: number = 100;
  private healthCareAllowance: number = 2500;
  public priceOfEachVisit: number = this.priceOfWorkoutSubscription + this.priceOfWorkoutCard - this.healthCareAllowance;
  public resetBtnIsVisible: boolean = false;
  public showGymResetBtn: boolean = false;
  public showHomeResetBtn: boolean = false;
  public counters: any;

  /**
   * Current value
   * Home workout: 2
   * Gym workout: 3
   * 
   */

  constructor(private tallyService: TallyService) { }

  ngOnInit() {
    this.getCount();
  }

  public getCount() {
    let lsCounters = this.tallyService.getCounter(this.appName);
    this.counters = lsCounters;
    this.recalculateGymPrice();
  }

  public increase(key: string): void {
    if (key === LsTypeEnum.gymWorkout) {
      this.counters.gymWorkout.data += 1;
      this.tallyService.saveCounter(this.appName, this.counters);
      this.recalculateGymPrice();
    }
    else if (key === LsTypeEnum.homeWorkout) {
      this.counters.homeWorkout.data += 1;
      this.tallyService.saveCounter(this.appName, this.counters);
    }
  }


  public decrease(key: string): void {
    if (key === LsTypeEnum.gymWorkout) {
      if (this.counters.gymWorkout.data > 0) {
        this.counters.gymWorkout.data -= 1;
        this.tallyService.saveCounter(this.appName, this.counters);
        this.recalculateGymPrice();
      }
    }
    else if (key === LsTypeEnum.homeWorkout) {
      if (this.counters.homeWorkout.data > 0) {
        this.counters.homeWorkout.data -= 1;
        this.tallyService.saveCounter(this.appName, this.counters);
      }
    }
  }

  public reset(key: string): void {
    if (key === LsTypeEnum.gymWorkout) {
      this.counters.gymWorkout.data = 0;
    }
    else if (key === LsTypeEnum.homeWorkout) {
      this.counters.homeWorkout.data = 0;
    }
    this.tallyService.saveCounter(this.appName, this.counters);
    this.showGymResetBtn = false;
    this.showHomeResetBtn = false;
  }

  public showResetButton(key: string) {
    if (key === LsTypeEnum.gymWorkout || key === LsTypeEnum.homeWorkout) {
      key === LsTypeEnum.gymWorkout ? this.showGymResetBtn = true : this.showHomeResetBtn = true;
    }
  }

  private recalculateGymPrice() {
    if (this.counters.gymWorkout.data > 0) {
      this.priceOfEachVisit = (this.priceOfWorkoutSubscription + this.priceOfWorkoutCard - this.healthCareAllowance) / this.counters.gymWorkout.data
    }
  }

  public toggleResetVisibility() {
    this.resetBtnIsVisible = !this.resetBtnIsVisible;
  }
}