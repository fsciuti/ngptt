# Ngptt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Branches

### step-1-setup

- Creazione Progetto `ng new ngptt -p='ngptt'` (No Routing / CSS Styles)
- Installazione Bootstrap `npm install bootstrap --save`
- Creazione delle Interfacce *Project* e *Task*
- Pulizia della view del componente *app.component*
- Aggiunta della Navbar nel componente *app.component*

### step-2-firstcomponent

- Creazione del componente *project-list.component*
    - Aggiunta tag in *app.component* view
    - Attributo *projects* con array statico dei progetti
    - Modifica view del componente con focus su:
        - String Interpolation
        - Event Interpolation
        - *ngFor
        - *ngIf
        - ngClass
        - DatePipe
    - Selezione del singolo Progetto
        - Safe Navigation Operator (?)

### step-3-filterdatawithpipe

- Creazione del pipe *search-filter.pipe*
- Implementazione della ricerca via pipes nella view di *project-list.component*
- Update del pipe *search-filter.pipe* con il controllo del tipo _boolean_

### step-4-formaddproject

- Implementazione sulla view del componente *project-list.component* del form di inserimento nuovo progetto
    - Modifica view del componente con focus su:
        - Template Driven Forms
            - Template Reference Variables _(#f='ngForm')_
            - Form Directives _(ngModel, ngSubmit)_
            - ngModel Validity _(touched, dirty, valid, etc...)_
        - Event Interpolation

### step-5-splitprojectlistcomponent

- Spostati I files del componente *project-list.component* in un subfolder
- Split della view del componente *project-list.component* in più componenti (Form Inserimento, Ricerca e Dettaglio)
    - Modifica view del componente con focus su:
        - Nidificazione di Componenti Child
- Aggiunta del Componente *project-detail.component*
    - Modifica del componente con focus su:
        - @Input Attribute
        - Nested Component
        - *ngFor
- Aggiunta del Componente *project-insert.component*
    - Modifica del componente con focus su:
        - @Output Attribute
        - Event Emitter
        - Spread Operator
- Aggiunta del Componente *project-search.component*
    - Modifica del componente con focus su:
        - @ViewChild
        - Event Emitter
        - ElementRef
        - Casting di <HTMLInputElement>

### step-6-dataservice

- Aggiunta del s Data Service *project.service* con focus su:
    - @Injectable _(providedIn)_
    - Service
- Modifica del *project-list.component* con focus su:
    - Dependency Injection

### step-7-routing

- Aggiunta dell'App Routing Module con focus su:
    - Routes
    - RouterModule
    - Imports/Exports
- Modifica dell'App Module con focus su:
    - Imports
- Aggiunta del Componente *dashboard*
- Aggiunta del Componente *navbar* con focus su:
    - routerLinkActive
    - routerLinkActiveOptions
    - routerLink
- Modifica di *project-list.component* con focus su:
    - router-outlet
- Modifica Navigazione tra i Path di *project-list.component*, *project-detail.component*, *project-insert.component* con focus su:
    - routerLink

### step-8-projectnavheadercomponent

- Aggiunta del Componente section-header con focus su:
    - @Input Attribute
    - Nested Component
    - ngClass

### step-9-bereactive

- Aggiunto Subject in *project-service* con focus su:
    - Subject
    - Subscription
- Modifica di *project-insert.component* per Quick Insert con focus su:
    - @Input
    - *ngIf
    - ngClass
- Modifica di *project-list.component* per Quick Insert con focus su:
    - Nested Component
- Modifica di *project-list.component* e *project-insert.component* con rimozione EventEmitter e utilizzo del Project Service con focus su:
    - Dependency Injection
    - Subject
    - Subscription
- Modifica di *project-list.component* per cancellazione Subscription con focus su:
    - NgDestroy
    - Subject Unsubcription
- Modifica di *project-list.component* per utilizzo di _async_ pipe con focus su:
    - Async Pipe
    - NgDestroy
    - Subject Unsubcription

### step-10-morerouting

- Aggiunta regola di routing con parametri per *project-detail.component* con focus su:
    - Ruoute Parameters
- Modifica di *project-detail.component* con get del parametro di routing per identificazione Progetto con focus su:
    - ActivatedRoute
- Modifica *project-service* con rename del metodo getSelectedProject in getProject
- Modifica *project-list* view con aggiunta del parametro di routing per link a Dettaglio Progetto con focus su:
    - routerLink
- Modifica del metodo *addProject* di *project-service* con return del progetto creato
- Modifica *project-insert* con aggiunta del router per il redirect dopo l'inserimento con focus:
    - router
    - Programmatic Navigation

### step-11-reactiveform

- Modifica *project-service* con task d'esempio su Array Progetti
- Modifica *project-service* con metodo di update dei Progetti
- Modifica *project-detail* con Reactive Update Form con focus su:
    - FormGroup
    - FormControl
    - Validators
    - formControlName
- Modifica *project-detail* con Reactive Update Task FormArray con focus su:
    - FormArray
    - formArrayName
- Modifica *project-detail* con EditMode con focus su:
    - ng-template
    - *ngIf (else)
    - Property Binding ([disabled] su bottoni)
- Modifica *project-detail* con fix sulle Date e su task.duration con focus su:
    - DatePipe
    - Number Field
- Modifica *project-service* e *project-detail* con Subscription per update con focus su:
    - Subscription
    - OnDestroy
    - Merge Operator