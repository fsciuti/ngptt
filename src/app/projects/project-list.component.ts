import { Component } from '@angular/core';
import { Project } from '../shared/Project';

@Component({
    selector: 'ngptt-project-list',
    templateUrl: './project-list.component.html'
})
export class ProjectListComponent {
    projects: Project[] = [
        {
            id: 1,
            code: 'NHusYJl',
            name: 'Progetto Alpha',
            description: 'Lorem ipsum dolor sit amet.',
            start: new Date(2019, 1, 31),
            end: new Date(2019, 3, 15),
            priority: 'medium',
            done: true,
            tasks: []
        },
        {
            id: 2,
            code: 'SJieYKl',
            name: 'Progetto Beta',
            description: 'Lorem ipsum dolor sit amet.',
            start: new Date(2019, 3, 31),
            end: new Date(2019, 6, 15),
            priority: 'low',
            done: true,
            tasks: []
        },
        {
            id: 3,
            code: 'POjeGBs',
            name: 'Progetto Gamma',
            description: 'Lorem ipsum dolor sit amet.',
            start: new Date(2019, 8, 15),
            priority: 'low',
            done: false,
            tasks: []
        },
    ];

    selectedProject: Project;

    constructor() { }

    selectProject(project: Project) {
        this.selectedProject = project;
    }
}