import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  constructor(private router: Router) { }

  navigateToForm(trainingName: string) {
    this.router.navigate(['/training/', trainingName]);
  }
}
