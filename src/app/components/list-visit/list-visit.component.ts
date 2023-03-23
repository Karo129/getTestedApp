import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Visit } from 'src/app/models/visit.interface';

@Component({
  selector: 'app-list-visit',
  templateUrl: './list-visit.component.html',
  styleUrls: ['./list-visit.component.css']
})
export class ListVisitComponent implements OnInit{

  @Input() allvisitlist: Visit[] = [];
  @Output() deleteVisit = new EventEmitter<number>();

  constructor(){}
  ngOnInit():void{}

 clearVisit(index: number){
  console.log('clear', index);
  this.deleteVisit.emit(index);
 }
 
}


 
