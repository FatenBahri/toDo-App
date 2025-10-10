import { Component, Input } from '@angular/core';

//child component
@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrls: ['./list-tasks.component.css']
})
export class ListTasksComponent {
@Input() data: string[]=[];
deleteTask(item: string) {
 let x=this.data.indexOf(item);
 this.data.splice(x,1);// supprime l'élément du tableau
}
modifyTask(item: string) {
  let x=this.data.indexOf(item);
  let newt =prompt('edit the task:',item);//donner la main a lutilisateur de creer
  if (newt !== null && newt.trim() !== '')
  {this.data[x]= newt;}
}}
