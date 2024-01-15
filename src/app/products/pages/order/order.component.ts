import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';




@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {


  public isUpperCase: boolean = false;
  public orderBy: keyof Hero | undefined | '' = '';

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      Color: Color.blue,
    },
    {
      name: 'Batman',
      canFly: false,
      Color: Color.black,
    },
    {
      name: 'Daredevil',
      canFly: false,
      Color: Color.red,
    },
    {
      name: 'Robin',
      canFly: false,
      Color: Color.red,
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      Color: Color.green,
    },
  ]

  toggleUpperCase(): void{
    this.isUpperCase = !this.isUpperCase;
  }

   changeOrder(value: keyof Hero){
    this.orderBy = value;
   }

}
