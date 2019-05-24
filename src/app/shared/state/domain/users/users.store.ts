import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';
import { User } from './user.model';

export interface StoreState extends EntityState<User> {}
export const uniqueId = 'id';

@Injectable({
  providedIn: 'root',
})
@StoreConfig({ name: 'users', idKey: uniqueId, cache: { ttl: null }, resettable: true  }) 
export class UsersStore extends EntityStore<StoreState, User> {
  constructor() {
    super({ modifying: false, loading: false });
  }
}
