import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const projects: Project[] = [
        {
            id: 1,
            code: 'NHusYJl',
            name: 'Progetto Alpha',
            description: 'Lorem ipsum dolor sit amet.',
            start: new Date(2019, 1, 31),
            end: new Date(2019, 3, 15),
            priority: 'medium',
            done: true,
            tasks: [
              {
                  'id': 1,
                  'name': 'Task di Prova',
                  'start': new Date(2018, 2, 8),
                  'duration': 10,
                  'isBillable': true
              },
              {
                  'id': 2,
                  'name': 'Task di Prova 2',
                  'start': new Date(2018, 2, 15),
                  'duration': 10,
                  'isBillable': true
              }
          ]
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
    return {projects};
  }
}
