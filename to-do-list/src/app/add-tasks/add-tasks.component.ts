import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ViewTasksComponent } from "../view-tasks/view-tasks.component";

@Component({
  selector: 'app-add-tasks',
  standalone: true,
  imports: [CommonModule, FormsModule, ViewTasksComponent],
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css'], // Corrected 'styleUrl' to 'styleUrls'
})
export class AddTasksComponent {
  tasksArray: { task: string; id: number }[] = [];
  currentTask = '';
  nextId: number = 1;

  addTask() {
    if (this.currentTask) {
      this.tasksArray.push({ task: this.currentTask, id: this.nextId++ }); // Correctly add task
      this.currentTask = ''; // Reset after adding
    }
  }

  deleteTask(id: number) {
    this.tasksArray = this.tasksArray.filter((task) => task.id !== id);
  }
}
