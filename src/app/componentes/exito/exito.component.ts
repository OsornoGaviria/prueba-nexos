import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-exito',
  templateUrl: './exito.component.html',
  styleUrls: ['./exito.component.scss'],
})
export class ExitoComponent implements OnInit {

  mensaje;
  constructor(private modal: ModalController, private navparams: NavParams) { }
  
  ngOnInit() {
    this.mensaje=this.navparams.get('data');
    console.log(this.mensaje)
  }

  cerrar(){
    this.modal.dismiss();

  }
}
