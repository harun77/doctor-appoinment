import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-open-appoinment',
  templateUrl: './open-appoinment.component.html',
  styleUrls: ['./open-appoinment.component.scss']
})
export class OpenAppoinmentComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}