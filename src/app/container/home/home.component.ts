import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
//import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { FriendEditionComponent } from 'src/app/components/friend-edition/friend-edition.component';
import { FriendsService } from 'src/app/services/friends.service';
import { IFriend } from '../../models/IFriend';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  friends: Array<IFriend> = [];
  friendToEdit: IFriend;
  isModalOpen: boolean;

  constructor(
    private friendsService: FriendsService,
    private modalController: ModalController
  ) { }

  ngOnInit(): void {
    this.friendsService.friends$.subscribe(friends => this.friends = friends);
  }

  onAdd(friend: IFriend) {
    this.friendsService.addFriend(friend);
  }

  onDelete(id: number) {
    this.friendsService.removeFriend(id);
  }

  async onEdit(friend: IFriend) {
    const subj = new BehaviorSubject(friend);

    const modal = await this.modalController.create({
      component: FriendEditionComponent,
      breakpoints: [0, 0.375],
      initialBreakpoint: 0.375,
      handle: false,
      componentProps: {
        subj
      }
    });

    await modal.present();

    subj.subscribe((value: IFriend) => {
      this.friendsService.editFriend(value);
    });

    modal.onDidDismiss().then(_ => {
      subj.unsubscribe();
    });
  }

}
