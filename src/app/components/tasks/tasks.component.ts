import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Tarefa } from '../../../../Tarefa';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,

  // aqui ta importando o CommomModule para utilizar as diretivas ngFor, ngClass, etc...
  imports: [CommonModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

                            //aqui o implements OnInit
export class TasksComponent implements OnInit {

  tarefas: Tarefa[] = [];
  // aqui ele ta passando o service para dentro do componente.
  // assim é possivel utilizar a lógica e a chamada de api task que passará por ele.
  constructor(private taskService:TaskService){}

  // depois que o serviço (chmamada api) é carregado no constructor, precisa ser iniciado.
  // por isso existe o ngOnInit
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((dado) => {
      this.tarefas = dado;
      console.log(dado);

    });
  }


}
