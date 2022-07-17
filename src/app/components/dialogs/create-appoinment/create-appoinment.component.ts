import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'create-appoinment',
  templateUrl: './create-appoinment.component.html',
  styleUrls: ['./create-appoinment.component.scss']
})
export class CreateAppoinmentComponent implements OnInit {

  // appoinmentForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    // this.appoinmentForm = new FormGroup({
    //   firstName: new FormControl(''),
    //   lastName: new FormControl(''),
    // });
  }

}
