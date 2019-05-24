import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UiStateStore } from './ui-state.store';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UiStateQuery extends Query<UIState> {

  public uiState$ = this.select();
  public tabActive$ = (tabInstanceId: string) => this.select(state => state.tabsActive[tabInstanceId]).pipe(map(val => val ? val : 0));

  constructor(protected store: UiStateStore) {
    super(store);
  }

}
