import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NtPipesModule } from '@ntersol-ui/pipes';

import {
  MatIconModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatTabsModule,
  MatCardModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatTooltipModule,
} from '@angular/material';

const modules = [
  // Angular Materials
  MatIconModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogModule,
  MatExpansionModule,
  MatTabsModule,
  MatCardModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatButtonToggleModule,
  MatPaginatorModule,
  MatTooltipModule,
  NtPipesModule
];

@NgModule({
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ...modules,
  ],
  exports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule, // NgbModule,
    ...modules,
  ],
  declarations: [],
})
export class VendorModule {}
