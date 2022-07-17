import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppoinmentService } from '../../../services/appoinment.service';

@Component({
  selector: 'create-appoinment',
  templateUrl: './create-appoinment.component.html',
  styleUrls: ['./create-appoinment.component.scss']
})
export class CreateAppoinmentComponent implements OnInit {

  appoinmentForm: FormGroup;

  constructor(private appoinmentService: AppoinmentService) {
    this.appoinmentForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl(''),
      dateTime: new FormControl(''),
    });
  }

  ngOnInit(): void {

  }

  getValue(name: string) {
    return this.appoinmentForm.get(name)?.value;
  }

  submitAppoinment(): void {
    const data = {
      firstName: this.getValue('firstName'),
      lastName: this.getValue('lastName'),
      email: this.getValue('email'),
      gender: this.getValue('gender'),
      age: this.getValue('age'),
      dateTime: this.getValue('dateTime'),
    }
    console.log(data);
    this.appoinmentService.createAppoinment(data).subscribe(() => {
      console.log('Appoinment created successfully!');
    })

  }

}
