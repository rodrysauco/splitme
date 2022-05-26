import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
//import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { IFriend } from 'src/app/models/IFriend';

@Component({
  selector: 'app-friend-edition',
  templateUrl: './friend-edition.component.html',
  styleUrls: ['./friend-edition.component.scss']
})
export class FriendEditionComponent implements OnInit{
  friendToEdit: IFriend;
  @Input() subj: BehaviorSubject<IFriend>;

  constructor(private modalController: ModalController) {
  }

  ngOnInit(): void {
    this.friendToEdit = this.subj.value;
  }

  onAdd(friendForm: any) {
    const editedFriend = {
      ...this.friendToEdit,
      nombre: friendForm.nombre,
      descripcion: friendForm.descripcion,
      monto: friendForm.monto
    };

    this.subj.next(editedFriend);
    this.modalController.dismiss();
  }

  close() {
    this.modalController.dismiss();
  }

}
