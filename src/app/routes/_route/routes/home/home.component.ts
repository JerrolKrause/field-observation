import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
// import { UiStateService } from 'src/app/shared/state/ui/ui-state.service';
// import { untilDestroyed } from 'ngx-take-until-destroy';

import { UsersService } from 'src/app/shared/state/domain/users';
import { UiStateService } from 'src/app/shared/state/ui';

// import { ApiService } from '$api';
// import { UIStoreService } from '$ui';
// import { Models } from '$models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit, OnDestroy {
  public users$ = this.users.query.users$;

  // private uiState: UiStateService,
  constructor(private users: UsersService, public ui: UiStateService) {}

  ngOnInit() {
    this.users.get().subscribe();

    // this.ui.query.uiState$.subscribe(res => console.log(res));

    
    /*
    setTimeout(() => {
      this.users
        .put({
          id: 3,
          name: 'Jerrol Krause',
          username: 'jerrol',
        })
        .subscribe();
    }, 2000);
    **/
    /*
    setTimeout(() => {
      this.users
        .delete({
          id: 4,
          name: 'Jerrol Krause',
          username: 'jerrol',
        })
        .subscribe();
    }, 3000);
      **/
  }
  public usersRefresh() {
    this.users.get(true).subscribe();
  }

  /** Must be present even if not used for autounsub */
  ngOnDestroy() {}
}
