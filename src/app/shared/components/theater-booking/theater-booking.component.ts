import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-theater-booking',
  templateUrl: './theater-booking.component.html',
  styleUrls: ['./theater-booking.component.scss'],
})
export class TheaterBookingComponent implements OnInit {
  seats: any;
  count: any = 0;
  constructor(
    private _authService: AuthService,
    private userDataService: UserDataService
  ) {}

  ngOnInit(): void {
    // this.count = 0;
    this.getAllSeats();
  }

  onLogOut() {
    this._authService.isUserLogOut();
  }

  seatSelected(i: any, eve: any) {
    this.count = eve.target.addClass('deactive');
  }

  getAllSeats() {
    this.userDataService.getSeatData().subscribe((data) => {
      console.log(data);
      this.seats = data;
      // data.forEach((ele: any) => {
      //   ele.isbooked = 'no';
      // });

      let usercount = data.filter(
        (user: any) => user.bookedBy == localStorage.getItem('email')
      );
      this.count = usercount.length;
      console.log(usercount);
    });
  }

  selectedseat(seat: any) {
    console.log(seat);
    if (seat.isbooked == 'no') {
      let obj = {
        isbooked: 'yes',
        id: seat.id,
        seat: parseInt(seat.id),
        bookedBy: 'no' ? localStorage.getItem('email') : 'no',
      };
      this.userDataService.changeSeatState(seat.id, obj).subscribe((res) => {
        console.log(res);
        this.getAllSeats();
      });
    }
  }
}
