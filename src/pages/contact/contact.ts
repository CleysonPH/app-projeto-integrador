import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  persons = [
    {
      name: "Cleyson",
      pontuation: 100,
    },
    {
      name: "Anna",
      pontuation: 98,
    },
    {
      name: "Juan",
      pontuation: 97,
    },
    {
      name: "Alan",
      pontuation: 95,
    },
    {
      name: "Autobele",
      pontuation: 94,
    },
    {
      name: "Maria",
      pontuation: 80,
    },
    {
      name: "Sarah",
      pontuation: 79,
    },
    {
      name: "Lucas",
      pontuation: 75,
    },
    {
      name: "Augusto",
      pontuation: 73,
    },
    {
      name: "Marcia",
      pontuation: 70,
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
