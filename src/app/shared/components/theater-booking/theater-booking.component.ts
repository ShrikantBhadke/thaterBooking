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
    this.getAllSeats();
  }

  onLogOut() {
    this._authService.isUserLogOut();
  }

  seatSelected(i: any, eve: any) {
    eve.target.addClass('deactive');
  }

  getAllSeats() {
    this.userDataService.getSeatData().subscribe((data) => {
      console.log(data);
      this.seats = data;
      let usercount = data.filter(
        (user: any) => user.bookedBy == localStorage.getItem('email')
      );
      this.count = usercount.length;
    });
  }

  selectedseat(id: any) {
    console.log(id);
    let obj = {
      isbooked: 'yes',
      id: id,
      seat: parseInt(id),
      bookedBy: localStorage.getItem('email'),
    };
    this.userDataService.changeSeatState(id, obj).subscribe((res) => {
      console.log(res);
      this.getAllSeats();
    });
  }
}
