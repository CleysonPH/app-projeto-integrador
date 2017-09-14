import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  showToast(position: String) {
    let toast = this.toastCtrl.create({
      message: "Ainda em implementação!",
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
