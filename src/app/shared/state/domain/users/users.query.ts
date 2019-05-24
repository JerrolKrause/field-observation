import { QueryEntity } from '@datorama/akita';
import { UsersStore, StoreState } from './users.store';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class UsersQuery extends QueryEntity<StoreState, User> {

  public users$ = this.select();

  constructor(protected store: UsersStore) {
    super(store);
  }

}
