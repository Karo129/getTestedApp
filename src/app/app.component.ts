import { Component, OnInit,  } from '@angular/core';
import { Visit } from './models/visit.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  listVisit: Visit[] = [];

  constructor(){}
ngOnInit(){}

addVisit(visit: Visit){

  this.listVisit.push(visit);
}
clearedVisit(index: number){
  console.log(index);
  this.listVisit.splice(index,1);

}

}



