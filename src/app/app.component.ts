import { Component, Input } from '@angular/core';
import { EntryScheme } from './schemes/entry-scheme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grillapp-website';
  entries: [EntryScheme]=[{name: "Test", wishes:{hals:0,bauch:0,wurst:0}}];
}