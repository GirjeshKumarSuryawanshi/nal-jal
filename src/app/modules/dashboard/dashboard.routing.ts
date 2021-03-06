import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardWaterWorksReadViewComponent } from './dashboard-water-works-read-view/dashboard-water-works-read-view.component';
import { DashboardWaterWorksBillViewComponent } from 'src/app/modules/dashboard/dashboard-water-works-bill-view/dashboard-water-works-bill-view.component';

const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            component: DashboardHomeComponent
          },
          {
            path: 'home',
            component: DashboardHomeComponent
          },
          {
            path: 'water-works/read/view',
            component: DashboardWaterWorksReadViewComponent
          },
          {
            path: 'water-works/bill/view',
            component: DashboardWaterWorksBillViewComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }