import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { IndexRComponent } from '../index-r/index-r.component';
import { Reservation, ReservationService } from '../reservation.service';

@Component({
  selector: 'app-view-r',
  imports: [RouterLink,
    RouterModule, IndexRComponent,BrowserModule
  ],
  templateUrl: './view-r.component.html',
  styleUrl: './view-r.component.css'
})
export class ViewRComponent {

  reservation: any; // Holds the reservation details

  constructor(
    private route: ActivatedRoute, // To access route parameters
    private reservationService: ReservationService // Service to fetch reservation data
  ) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['reservationId'];
//     if (!this.id) {
//       console.error('Invalid reservationId');
//       this.route.navigate(['/reservations']);
//       return;
//     }

//     this.reservationService.find(this.id).subscribe(
//       (data: Reservation) => {
//         this.reservation = data;
//         this.loading = false;
//       },
//       (error) => {
//         console.error('Error fetching livre:', error);
//         this.loading = false;
//         this.route.navigate(['/error']);
//       }
//     );
//   }

//   goBack(): void {
//     this.router.navigate(['/livres']);
//   }
}