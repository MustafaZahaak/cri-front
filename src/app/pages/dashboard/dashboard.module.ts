import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ModalsModule, WidgetsModule } from '../../_metronic/partials';
import { FileManagementComponent } from 'src/app/modules/file-management/file-management.component';
import { FileManagmentModule } from 'src/app/modules/file-management/file-management.moudle';

@NgModule({
  declarations: [DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
    ]),
    WidgetsModule,
    ModalsModule,
    FileManagmentModule,
  ],
})
export class DashboardModule {}
