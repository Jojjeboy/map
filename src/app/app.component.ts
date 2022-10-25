import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  pageTitle: string = '';
  constructor(private router: Router, private titleService: Title) {
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd) {

        if (event.url.split('/')[1]) {
          const urlPart = event.url.split('/')[1];
          this.pageTitle = urlPart.charAt(0).toUpperCase() + urlPart.slice(1);
        }
        else {
          this.pageTitle = 'Start'
        }
      }
    });
  }
}