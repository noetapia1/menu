import { Component } from '@angular/core';
import { MenuItem } from './MenuItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:String = 'Chirpus pizza';
  today = new Date();
  itemList: MenuItem[] =[
    {item:"picadas", category:"desayuno", price:1.5},
    {item:"gorditas", category:"desayuno", price:1.2},
    {item:"pozole", category:"comida", price:2.3},
    {item:"birria", category:"comida", price:3.5},
    {item:"mole", category:"comida", price:2.6},
    {item:"tortas", category:"comida", price:1.7},
    {item:"chalupas", category:"cena", price:2.0},
    {item:"tostadas", category:"cena", price:1.8},
    {item:"tacos", category:"cena", price:2.5},
  ];
  tableStyle: object={
    'border':'2px solid black'
    };
  headStyle: object={
    'background-color': '#3f87a6',
    'color': '#fff',
    'font-size':'24px'
  };
  bodyStyle: object={
    'font-size':'12px',
    'background-color': '#e4f0f5'
  };
  rowStyle: object={
    'font-size':'12px',
    'border':'2px solid black'
  };

  
}

