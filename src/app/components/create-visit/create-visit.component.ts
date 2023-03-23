import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Test } from 'src/app/models/test.interface';
import { Visit } from 'src/app/models/visit.interface';

@Component({
  selector: 'app-create-visit',
  templateUrl: './create-visit.component.html',
  styleUrls: ['./create-visit.component.css'],
})

export class CreateVisitComponent {
  name = '';
  date = '';
  time = '';
  chosenTest = '';

  tests: Test[] = [
    { name: 'Blood Counts', id: 1 },
    { name: 'Glucose', id: 2 },
    { name: 'Lipidogram', id: 3 },
    { name: 'Ferritin', id: 4 },
    { name: 'Triglycerides', id: 5 },
  ];

  incorrectForm = false;
  @Output() newVisit = new EventEmitter<Visit>();

  constructor() {}

  ngOnInit(): void {}

  confirm() {
    console.log(this.chosenTest);
    if (
      this.name == '' ||
      this.date == '' ||
      this.time === '' ||
      this.chosenTest == ''
    ) {
      this.incorrectForm = true;
      return;
    }
    this.incorrectForm = false;

    const confirmedVisit: Visit = {
      name: this.name,
      date: this.date,
      time: this.time,
      test: this.chosenTest,
    };

    this.newVisit.emit(confirmedVisit);
    this.resetFields();
  }

  resetFields() {
    this.name = '';
    this.date = '';
    this.time = '';
    this.chosenTest = '';
  }
}
