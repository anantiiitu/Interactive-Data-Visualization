import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { FormComponent } from 'src/app/modules/form/form.component';
import { TableComponent } from 'src/app/modules/table/table.component';
import { CalendarComponent } from 'src/app/modules/calendar/calendar.component';
import { MapComponent } from 'src/app/modules/map/map.component';
import { ChartComponent } from 'src/app/modules/chart/chart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { HighchartsChartModule } from 'highcharts-angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FullCalendarModule } from '@fullcalendar/angular';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    FormComponent,
    TableComponent,
    CalendarComponent,
    MapComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    RouterModule,
    HighchartsChartModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    FullCalendarModule,
    MatExpansionModule,
    MatGridListModule,
    MatProgressBarModule,
    MatListModule,
    MatCardModule,
    MatProgressSpinnerModule,
    LeafletModule,
  ],
})
export class DefaultModule {}
