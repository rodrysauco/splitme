import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendEditionComponent } from './friend-edition.component';

describe('FriendEditionComponent', () => {
  let component: FriendEditionComponent;
  let fixture: ComponentFixture<FriendEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendEditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
