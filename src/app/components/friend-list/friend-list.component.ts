import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IFriend } from 'src/app/models/IFriend';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent {
  @Input() friends!: Array<IFriend>;
  @Output() deleteFriend = new EventEmitter();
  @Output() editFriend = new EventEmitter();

  constructor() { }

  onDelete(id: number) {
    this.deleteFriend.emit(id);
  }
  
  onEdit(id: number) {
    this.editFriend.emit(id);
  }

}
