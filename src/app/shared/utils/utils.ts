import { IFriend } from "src/app/models/IFriend";

export function getTotal(friendsArray: IFriend[]) {
  const initialValue = 0;
  return friendsArray.reduce((previous, current) => previous + current.monto, initialValue)
}

export function setDebt(friends: IFriend[], total: number) {
  return friends.forEach(friend => {
    return friend.montoAPagar = total - friend.monto;
  });
}