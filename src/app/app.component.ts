import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Info',
      url: '/info',
      icon: 'list'
    },
    {
      title: 'Prescription',
      url: '/prescription',
      icon: 'list'
    },
    {
      title: 'Tests',
      url: '/tests',
      icon: 'list'
    },
    {
      title: 'Update Info',
      url: '/update',
      icon: 'list'
    },
    {
      title: 'Visits',
      url: '/visits',
      icon: 'list'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
