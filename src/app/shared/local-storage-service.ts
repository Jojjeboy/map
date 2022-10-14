import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LocalStorageServiceService {

  constructor() {
    if (window.hasOwnProperty('localStorage')) {
    } else {
      window.alert('Please considering upgrading browser to be able to use Localstorage');
    }
  }

  private initializeKey(key: string, defaultData: any) {
      localStorage.setItem(key, JSON.stringify(defaultData));
  }

  public getData(key: string, defaultData: any): any {
    if (localStorage.getItem(key) === null) {
      this.initializeKey(key, defaultData);
    }
    return localStorage.getItem(key);
  }

  public saveData(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  
  public removeData(key: string) {
    localStorage.removeItem(key);
  }
}