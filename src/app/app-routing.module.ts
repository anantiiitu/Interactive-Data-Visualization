import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { FormComponent } from './modules/form/form.component';
import { TableComponent } from './modules/table/table.component';
import { CalendarComponent } from './modules/calendar/calendar.component';
import { MapComponent } from './modules/map/map.component';
import { ChartComponent } from './modules/chart/chart.component';
import { ProfileComponent } from './shared/components/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      },
      {
        path: 'table',
        component: TableComponent,
      },
      {
        path: 'calendar',
        component: CalendarComponent,
      },
      {
        path: 'map',
        component: MapComponent,
      },
      {
        path: 'chart',
        component: ChartComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
