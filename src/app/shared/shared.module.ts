import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConvertToSpacePipe } from './convert-to-space.pipe';
import { StarComponent } from './star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ConvertToSpacePipe, StarComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [ConvertToSpacePipe, StarComponent, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
