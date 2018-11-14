import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { MinePage } from '../mine/mine';
import { ModalPage } from '../modal/modal';
import { ModalController } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab4Root = ContactPage;
  tab5Root = MinePage;

  constructor(private modalCtrl:ModalController) {

  }

  ionViewDidLoad(){
    document.querySelector('#tab-t0-2').addEventListener('click',()=>{
      let modal = this.modalCtrl.create(ModalPage);
      modal.present();
    },false);
  }
}
