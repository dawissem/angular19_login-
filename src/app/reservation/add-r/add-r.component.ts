import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LivreService } from '../../livre/livre.service';
import { ReservationService } from '../reservation.service';
 
@Component({
  selector: 'app-add-r',
  templateUrl: './add-r.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  styleUrls: ['./add-r.component.css'],
})
export class AddRComponent implements OnInit {
  form!: FormGroup;
  fb: any;


    constructor(
      public ReservationService: ReservationService,
      private router: Router
    ) { }
        
 
  ngOnInit(): void {
    this.form = this.fb.group({
      userId: [
        '',
        [Validators.required, Validators.min(1)], // Validate as positive integer
      ],
      livreId: [
        '',
        [Validators.required, Validators.min(1)], // Validate as positive integer
      ],
      dateReservation: ['', Validators.required],
      dateRetour: ['', Validators.required],
      dateAnnulation: [''], // Optional field
    });
  }

  /**
   * Getter for form controls
   */
  get f() {
    return this.form.controls;
  }

  /**
   * Handles form submission
   */
  // submit(): void {
  //   if (this.form.valid) {
  //     console.log('Form Submitted:', this.form.value);
  //     // Add your logic to handle form submission (e.g., call a service)
  //   } else {
  //     console.log('Form is invalid');
  //   }
  // }




  submit() {
    console.log(this.form.value);
    this.ReservationService.addReservation(this.form.value).subscribe((res: any) => {
      console.log('reservation created successfully!');
      this.router.navigateByUrl('/dashboard/reservation/index-r');
     });
  }





  
}
