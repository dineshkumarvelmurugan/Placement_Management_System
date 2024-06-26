import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {TrainingService} from '../training/training.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-traform',
  templateUrl: './traform.component.html',
  styleUrls: ['./traform.component.css']
})
export class TraformComponent implements OnInit {
  formData = {
    trainingName: '',
    name: '',
    rollno: '',
    branch: '',
    year: '',
    skill: ''
  };

  constructor(private trainingService: TrainingService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.trainingService.addEntry(this.formData).subscribe(response => {
        console.log(response);
        form.resetForm();
      });
    }
  }
}