import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.scss']
})
export class CreateOnomatopiaComponent implements OnInit {
  newOnomatopia: FormGroup = new FormGroup({});

  @Output()
  public sendOnomatopiaToParent: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.newOnomatopia = this.fb.group({
      onomatopia: ['']
    })
  }

  createOnomatopia(): void {
    this.sendOnomatopiaToParent.emit(this.newOnomatopia.controls['onomatopia'].value);
  }

  onSubmit() {
    console.log(this.newOnomatopia.controls['onomatopia'].value);
  }
}
