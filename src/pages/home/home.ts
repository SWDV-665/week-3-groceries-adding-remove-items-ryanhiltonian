import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  title = "Grocery";

  items = [
    {
      name: "Pizza",
      quantity: 2
    },
    {
      name: "Cereal",
      quantity: 1
    },
    {
      name: "Soft Drinks",
      quantity: 3
    },
    {
      name: "Peanuts",
      quantity: 1
    }
  ]

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  removeItem(item, index) {
    console.log("Removing Item - ", item.name);
    const toast = this.toastCtrl.create({
      message: "Removing Item - " + item.name,
      duration: 3000
    });
    this.items.splice(index, 1);
    toast.present();
  }

  addItem() {
    this.promptForAdd();
  }

  promptForAdd() {
    const prompt = this.alertCtrl.create({
      title: 'Add Item',
      message: "Enter the information for the new item to be added",
      inputs: [
        {
          name: 'name',
          placeholder: 'name'
        },
        {
          name: 'quantity',
          placeholder: 'quantity'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: item => {

          }
        },
        {
          text: 'Save',
          handler: item => {
            console.log(item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }
}


