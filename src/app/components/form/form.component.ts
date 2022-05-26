import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IFriend } from 'src/app/models/IFriend';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Output() add = new EventEmitter();
  @Input() editionMode: boolean = false;
  @Input() friend?: IFriend;

  friendForm = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    descripcion: new FormControl(''),
    monto: new FormControl('', [Validators.min(0)])
  });

  constructor() { }

  onSubmit() {
    this.add.emit(this.friendForm.value);
    this.friendForm.reset({
      nombre: '',
      descripcion: '',
      monto: ''
    });
    this.friendForm.markAsUntouched();
  };

  ngOnInit(): void {
    if (this.friend) {
      this.loadFriend();
    }
  }

  loadFriend() {
    this.friendForm = new FormGroup({
      nombre: new FormControl(this.friend?.nombre, [Validators.required]),
      descripcion: new FormControl(this.friend?.descripcion),
      monto: new FormControl(this.friend?.monto, [Validators.min(0)])
    });
  }

}
