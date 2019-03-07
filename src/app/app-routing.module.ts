import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectInsertComponent } from './projects/project-insert/project-insert.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';

const routes: Routes = [
    { path: 'projects/detail/:code', component: ProjectDetailComponent },
    { path: 'projects/add', component: ProjectInsertComponent },
    { path: 'projects', component: ProjectListComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}