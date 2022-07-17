import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateAppoinmentComponent } from '../dialogs/create-appoinment/create-appoinment.component';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.scss']
})
export class AppoinmentComponent {

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  selectedMonth = 'January';

  constructor(public dialog: MatDialog, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    let id: any = this.route.snapshot.paramMap.get('id');
    if (!id) {
      const date = new Date();
      id = date.getMonth() + 1;
    }
    this.selectedMonth = this.months[id - 1];
  }

  openCreateAppoinmentDialog(): void {
    const dialogRef = this.dialog.open(CreateAppoinmentComponent, {
      width: '800px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  goToCalendar(): void {
    const id = this.months.indexOf(this.selectedMonth) + 1;
    this.router.navigate(['month', id]);
  }

}
