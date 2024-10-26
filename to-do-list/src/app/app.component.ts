import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTasksComponent } from './add-tasks/add-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
