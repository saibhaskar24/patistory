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
      icon: 'help'
    },
    {
      title: 'Prescription',
      url: '/prescription',
      icon: 'medkit'
    },
    {
      title: 'Tests',
      url: '/tests',
      icon: 'attach'
    },
    {
      title: 'Update Info',
      url: '/update',
      icon: 'cloud-upload'
    },
    {
      title: 'Visits',
      url: '/visits',
      icon: 'walk'
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
