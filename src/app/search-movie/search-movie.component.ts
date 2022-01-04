import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {isRequiredValidator} from "./model/isRequiredValidator";
import {rangeDateValidator} from "./model/rangeDateValidator";

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.scss']
})
export class SearchMovieComponent implements OnInit {
  movieForm: FormGroup = new FormGroup({});

  get f(): { [key: string]: AbstractControl } {
    return this.movieForm.controls;
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      identifyOrTitle: this.fb.group({
          identify: [''],
          title: [''],
        },
        {
          validator: isRequiredValidator('identify', 'title'),
        }),
      type: [1],
      year: ['', [Validators.required, rangeDateValidator(1900, new Date())]],
      plug: [''],
    });

    this.setPlug();

    this.movieForm.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  setPlug() {
    this.movieForm.patchValue({
      plug: 'small',
    })
  }

  onSubmit(): void {
    return console.log(JSON.stringify(this.movieForm.value, null, 3));
  }
}
