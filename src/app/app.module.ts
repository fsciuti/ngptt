import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectListComponent } from './projects/project-list.component';
import { SearchFilterPipe } from './shared/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
