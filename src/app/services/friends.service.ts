import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IFriend } from '../models/IFriend';
import { getTotal, setDebt } from '../shared/utils/utils';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  friends: Array<IFriend>;
  id = 1;
  amount = 0;
  amountEach = 0;

  friends$: Subject<IFriend[]> = new Subject();
  amount$: Subject<number> = new Subject();
  amountEach$: Subject<number> = new Subject();

  constructor() {
    this.friends = [];
  }

  addFriend(newFriend: IFriend) {
    newFriend.id = this.id;
    newFriend.monto = newFriend.monto ? newFriend.monto : 0;
    this.friends.push(newFriend);
    this.id += 1;
    this.updateFriends();
  };

  editFriend(friendEdited: IFriend) {
    const index = this.friends.findIndex((friend) => friend.id === friendEdited.id);
    this.friends[index] = friendEdited;
    this.updateFriends();
  }

  removeFriend(friendID: number) {
    const filteredFriends = this.friends.filter(friend => friend.id !== friendID);
    this.friends = filteredFriends;
    this.updateFriends();
  };

  updateFriends() {
    this.amount = getTotal(this.friends);
    this.amountEach = this.amount / this.friends.length | 0;
    setDebt(this.friends, this.amountEach);
    this.shareValues();
  }

  shareValues() {
    this.friends$.next(this.friends);
    this.amount$.next(this.amount);
    this.amountEach$.next(this.amountEach);
  }

}
