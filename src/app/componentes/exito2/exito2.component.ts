import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-exito2',
  templateUrl: './exito2.component.html',
  styleUrls: ['./exito2.component.scss'],
})
export class Exito2Component implements OnInit {

  mensaje;
  constructor(private modal: ModalController, private navparams: NavParams) { }

  ngOnInit() {
    this.mensaje=this.navparams.get('data');
  }


  cerrar(){
    this.modal.dismiss();

  }
}
