import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {

  mensaje;
  constructor(private modal: ModalController, private navparams: NavParams) { }

  ngOnInit() {
    this.mensaje=this.navparams.get('data');
  }


  cerrar(){
    this.modal.dismiss();

  }

}
