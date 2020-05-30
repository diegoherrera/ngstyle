import { Component } from '@angular/core';
import { Actores } from './Model/actores';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngstyle';
  actores: Actores[] = [
    {
       actor_name: 'Peter Dinklage',
       character_name: 'Tyrion Lannister',
       gender: 'Male',
       status: 'Alive'
    },
    {
       actor_name: 'Sean Bean',
       character_name: 'Ned Stark',
       gender: 'Male',
       status: 'Dead'
    },
    {
       actor_name: 'Emilia Clark',
       character_name: 'Khaleesi',
       gender: 'Female',
       status: 'Alive'
    },
    {
       actor_name: 'Catelyn Stark',
       character_name: 'Michelle Fairley',
       gender: 'Female',
       status: 'Dead'
    }
  ];

  
}
