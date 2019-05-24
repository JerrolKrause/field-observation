import { Component } from '@angular/core';
import { AuthService, AppSettings } from '$shared';
import { Router, NavigationEnd } from '@angular/router';
import { VersionManagementService } from '@ntersol-ui/services';
import { filter } from 'rxjs/operators';
import { ModalsService } from '$modals';

const startCase = require('lodash/startCase');
const toLower = require('lodash/toLower');

@Component({
  selector: 'app-nav',
  styleUrls: ['./nav.component.scss'],
  templateUrl: './nav.component.html',
})
export class NavComponent {
  /** Is the dropdown menu open on mobile */
  public isOpen = false;
  /** Turn the username into title case */
  public userName = startCase(toLower(this.settings.userName));
  /**   Does the app have an update */
  public hasUpdate$ = this.vm.versionUpdated$;
  /** App version */
  public version = this.settings.version;

  constructor(
    private auth: AuthService,
    private settings: AppSettings,
    public modals: ModalsService,
    private vm: VersionManagementService,
    private router: Router,
  ) {
    // On route change, if mobile nav is open close it
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => {
      if (this.isOpen) {
        this.isOpen = false;
      }
    });
  }

  public updateApp() {
     /**
         * this.modals
      .open(
        'ConfirmationModalComponent',
        false,
        'sm',
        'A new version of this application has just been released, would you like to refresh?',
      )
      .afterClosed()
      .subscribe(closed => {
        if (closed) {
          // Reset ui state to clear out any breaking changes
          this.settings.ui = null;
          // Reload page
          location.reload();
        }
      });
        */
  }

  public logOut() {
    this.auth.logOut(true);
  }
}
