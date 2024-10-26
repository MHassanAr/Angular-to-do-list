import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-view-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './view-tasks.component.html',
  styleUrl: './view-tasks.component.css',
})
export class ViewTasksComponent {
  @Input() viewTask: { task: string; id: number } | null = null;
  @Output() taskDelete = new EventEmitter<number>();

  deleteTask() {
    if (this.viewTask) {
      this.taskDelete.emit(this.viewTask.id);
    }
  }
}
