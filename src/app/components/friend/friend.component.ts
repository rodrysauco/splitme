import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IFriend } from 'src/app/models/IFriend';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  @Input() friend !: IFriend;
  @Output() delete = new EventEmitter();
  @Output() edit = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteMe() {
    this.delete.emit(this.friend.id);
  }

  editMe() {
    this.edit.emit(this.friend);
  }

}
function trigger(arg0: string, arg1: any[]): any {
  throw new Error('Function not implemented.');
}

function transition(arg0: string, arg1: any[]): any {
  throw new Error('Function not implemented.');
}

function style(arg0: { opacity: number; }): any {
  throw new Error('Function not implemented.');
}

function animate(arg0: string, arg1: any): any {
  throw new Error('Function not implemented.');
}

