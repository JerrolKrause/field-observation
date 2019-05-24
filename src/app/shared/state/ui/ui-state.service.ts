import { Injectable } from '@angular/core';
import { UiStateStore } from './ui-state.store';
import { UiStateQuery } from './ui-state.query';
import { MatTabChangeEvent } from '@angular/material';

@Injectable({ providedIn: 'root' })
export class UiStateService {

  constructor(private store: UiStateStore, public query: UiStateQuery) {}

  /**
   * Change and persist the visible tab of a tabset
   * Make sure this service is public: constructor(public ui: UIStoreService) and that the first argument matches
   * USAGE
   <mat-tab-group [selectedIndex]="ui.query.tabActive$('home') | async" (selectedTabChange)="ui.tabChange('home', $event)">
   * @param tabInstanceId - A name or unique identifier for this tab instance
   * @param tabEvent - The tabChange event supplied by ng-boostrap
   */
  public tabChange(tabInstanceId: string, tabEvent: MatTabChangeEvent) {
    const tab: Record<string, number> = {};
    tab[tabInstanceId] = tabEvent.index;
    this.store.update({tabsActive : tab});
  }

  /**
   * Change a toggle which is just a boolean in a dictionary
   * @param prop - Property to set, corresponds to toggle$ in the ui.select service
   * @param value - T/F
  
  public toggle(prop: string, value: boolean) {
    // this.store.dispatch(UIStoreActions.TOGGLES({ prop: prop, value: value }));
  }
 */
  /**
   * Toggle sidebar
   * @param toggle - New sidebar state
  
  public gridStateChange(gridState: GridState) {
    // this.store.dispatch(UIStoreActions.GRID_STATE_CHANGE(gridState));
  }
 */

}
