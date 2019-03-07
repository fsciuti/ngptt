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