import { Component } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
//parent component
export class AddTaskComponent {
  task:string = "";
  tab: string[] = [];

  addTask() {
    console.log(this.task);
    this.tab.push(this.task);
    console.log(this.tab);
    this.task = ""; //a envoyer au child component ListTasksComponent
    
  } 

}

