import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  fakeMethod: boolean = false;

  onClick(){
    this.fakeMethod = true;
    console.log(this.fakeMethod);
  }
}
