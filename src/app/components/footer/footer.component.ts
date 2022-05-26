import { Component, OnInit } from '@angular/core';
import { FriendsService } from 'src/app/services/friends.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  total: number = 0;
  eachOne: number = 0;

  constructor(private friendsService: FriendsService) { }

  ngOnInit(): void {
    this.friendsService.amount$.subscribe(total => this.total = total);
    this.friendsService.amountEach$.subscribe(each => this.eachOne = each);
  }

}
