import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Kitten} from "./model/kitten.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})
export class CreateKittenComponent implements OnInit {
  kittenForm: FormGroup = new FormGroup({})

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.kittenForm = this.fb.group({
      name: ['', Validators.required],
      race: ['', Validators.required],
      birthday: ['', Validators.required],
      picture: ['', Validators.required],
    });
  }

  @Output()
  public sendKitten: EventEmitter<Kitten> = new EventEmitter<Kitten>();

  addKitten(): void {
    this.sendKitten.emit(
      new Kitten(
        this.kittenForm.controls['name'].value,
        this.kittenForm.controls['race'].value,
        this.kittenForm.controls['birthday'].value,
        this.kittenForm.controls['picture'].value,
      )
    );
  }

  onSubmit() {
    console.log(this.kittenForm.value);
  }
}
