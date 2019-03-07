import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { path: 'projects', component: ProjectListComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '',   redirectTo: '/dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}