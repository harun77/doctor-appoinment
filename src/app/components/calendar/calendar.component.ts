import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppoinmentService } from '../../services/appoinment.service';
import { OpenAppoinmentComponent } from '../dialogs/open-appoinment/open-appoinment.component';

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  appoinments: any;

  weeks = Array.from(Array(4).keys());

  days = Array.from(Array(6).keys());

  constructor(private appoinmentService: AppoinmentService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.appoinmentService.getAppoinments().subscribe(res => {
      this.appoinments = res.sort((a: any, b: any) => {
        var dateA = new Date(a.dateTime).getTime();
        var dateB = new Date(b.dateTime).getTime();
        return dateA - dateB;
      });
    })
  }

  openAppoinment(appoinment: any) {
    const dialogRef = this.dialog.open(OpenAppoinmentComponent, {
      width: '500px',
      data: appoinment
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
