/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';

import {AppState} from './app.service';
import {Home} from './home';
import {RouterActive} from './router-active';

import {Dashboard} from './dashboard/dashboard.component';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector:      'app',
  pipes:         [],
  providers:     [],
  directives:    [RouterActive],
  encapsulation: ViewEncapsulation.None,
  styles:        [
    require('normalize.css'),
    require('./app.scss')
  ],
  template: require('./app.html')
})
@RouteConfig([
  {path: '/', name: 'Index', component: Dashboard, useAsDefault: true},
  {path: '/dashboard', name: 'Dashboard', component: Dashboard},
  {path: '/home', name: 'Home', component: Home},
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  {path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About')}
])
export class App {

  constructor (public appState: AppState) {
    this.appState.config = require('./app.config.json');
  }

  ngOnInit () {
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
