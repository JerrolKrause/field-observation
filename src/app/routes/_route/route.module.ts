import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteModule } from '$site'; // Site modules

// Routing
import { routing } from './routes';

// Components
import { HomeComponent } from './routes/home/home.component';

@NgModule({
  imports: [CommonModule, SiteModule, routing],
  declarations: [HomeComponent],
  providers: [],
  exports: [],
  entryComponents: [],
})
export class RouteModule {}
