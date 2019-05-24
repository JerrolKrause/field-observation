import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteModule } from '$site'; // Site modules
import { GridModule } from '$features'; // Lazy loaded datagrid DatagridModule,

import { SignaturePadModule } from 'angular2-signaturepad';

// Home component and routing
import { routing } from './home.routes';
import { HomeComponent } from './routes/home/home.component';

@NgModule({
  imports: [CommonModule, SiteModule, routing, GridModule, SignaturePadModule],
  declarations: [HomeComponent],
  providers: [],
  exports: [],
  entryComponents: [],
})
export class HomeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: HomeModule,
      providers: [],
    };
  }
}
