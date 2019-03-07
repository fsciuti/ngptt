import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { SearchFilterPipe } from './shared/search-filter.pipe';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectInsertComponent } from './projects/project-insert/project-insert.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProjectSearchComponent } from './projects/project-search/project-search.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { SectionHeaderComponent } from './shared/components/section-header/section-header.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    SearchFilterPipe,
    ProjectInsertComponent,
    ProjectDetailComponent,
    ProjectSearchComponent,
    DashboardComponent,
    NavbarComponent,
    SectionHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
