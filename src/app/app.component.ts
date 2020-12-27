import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()

export class AppComponent {

  readonly apiURL : string;
  resultListTasks : any;
  
  constructor(private http: HttpClient) {
    this.apiURL = 'https://5fe1ea217a94870017681bf6.mockapi.io/Tasks';
   }

  // Listar Tasks - GET
  listarTasks() {
    this.http.get(`${this.apiURL}`)
    .subscribe(
      (result) => {
        this.resultListTasks = result;
      }
    );
  }

  // Delete Tasks - DELETE
  deleteTasks(row: { id: any; }) {
    this.http.delete(`${this.apiURL}/${row.id}`).subscribe(()=> 
        this.http.get(`${this.apiURL}`).subscribe(
      (resultado) => {
        this.resultListTasks = resultado;
      }
    ));
  }

  // Update Tasks - GET
  updateTask() {
    this.http.put(`${this.apiURL}/2`, {})
      .subscribe(resultado => console.log(resultado));
  }
}