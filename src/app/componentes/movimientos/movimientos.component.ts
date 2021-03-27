import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams} from '@ionic/angular';
import { ApiBDService } from '../../servicios/api-bd.service';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.component.html',
  styleUrls: ['./movimientos.component.scss'],
})
export class MovimientosComponent implements OnInit {

  idCuenta; movimientos;mov=0;
  constructor(private modal: ModalController, private navparams: NavParams, private api: ApiBDService) { }

  ngOnInit() {
    this.idCuenta=this.navparams.get('data');
    this.verMovimientos()
  }

  verMovimientos(){
    let x = {
      funcion: 'verMovimientos',
      cuenta: this.idCuenta,
    }
    this.api.verMovimientos(x).subscribe(res=>{
       this.movimientos=res;
       if(this.movimientos.length>0){
         this.mov=1;
       }
    })
  }

  salir(){
    this.modal.dismiss();
  }

}
