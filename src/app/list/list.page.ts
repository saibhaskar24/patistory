import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
      this.items.push({
        title: 'Feaver  ' ,
        note: '22/09/2019',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
      this.items.push({
        title: 'cold  ' ,
        note: '12/09/2019',
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
