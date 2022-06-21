import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-and-recipes';
  currentView: number = 0

  changeView(newViewNumber: number){
    this.currentView = newViewNumber
  }
}
