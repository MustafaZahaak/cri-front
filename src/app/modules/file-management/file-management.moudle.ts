import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileManagementComponent } from './file-management.component';
import { FileManagementRoutingModule } from './file-management.route.module';

@NgModule({
  declarations: [
    FileManagementComponent
  ],
  exports :[
    FileManagementComponent,
  ],
  imports: [
    CommonModule,
    FileManagementRoutingModule,
    
  ],
})
export class FileManagmentModule {}
