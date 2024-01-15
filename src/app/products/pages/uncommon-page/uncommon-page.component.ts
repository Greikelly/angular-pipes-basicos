import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }


  changeCliente():void{
    this.name = 'Melissa';
    this.gender = 'female';
  }



  //i18n Plural

  public clients: string[] = ['Maria','Pedro','Fernando','Hernando','Eduardo','Melissa','Natalia'];
  public clientsMap={
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 cleintes esperando.',
    'other': 'tenemos # clientes esperando.',
  }


  deleteClient():void{
    this.clients.shift();
  }




  // keyvalue pipe

  public person = {
    name: 'Fernando',
    age: 35,
    address: 'Ottawa, Canada '
  }



  // Async pipe

  public myObservableTimer = interval(2000).pipe(
  tap( value => console.log('tap:', value))
  );
}
