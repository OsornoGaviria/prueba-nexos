import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBDService } from '../../servicios/api-bd.service';
import { ModalController } from '@ionic/angular';
import { ErrorComponent } from '../../componentes/error/error.component';
import { ExitoComponent } from '../../componentes/exito/exito.component';

@Component({
  selector: 'app-cpropias',
  templateUrl: './cpropias.page.html',
  styleUrls: ['./cpropias.page.scss'],
})
export class CpropiasPage implements OnInit {

  IdUsusario; productos; origen; destino;valor; saldoOrigen; saldoDestino;
  constructor(private api: ApiBDService, private route: Router, private modal:ModalController) {}


  ngOnInit() {
    this.IdUsusario=window.localStorage['IdUsuario'];
    this.verProducctos();
  }

  verProducctos(){
    let x = {
      funcion: 'verProductos',
      idcliente: this.IdUsusario,
    }
    this.api.verProductos(x).subscribe(res=>{
      this.productos=res;
    })
  }


  aceptar(){
    if(this.origen==undefined || this.origen==""){
      this.errorAlert("Seleccione el producto de origen")
    }else if(this.destino==undefined || this.destino==""){
      this.errorAlert("Seleccione el producto de destino")
    }else if(this.origen==this.destino){
      this.errorAlert("No puedes tranferir fondos a una misma cuenta")
    }else if(this.valor==undefined || this.valor=="" || this.valor==0){
      this.errorAlert("Ingrese el valor a tranferir")
    }else if(parseInt(this.valor) > parseInt(this.saldoOrigen)){
      this.errorAlert("Fondos insuficientes")
    }else{
    
      let x = {
        funcion: 'Tranferencia',
        cOrigen: this.origen,
        cDestino: this.destino,
        valorT: this.valor,
        saldoO: this.saldoOrigen,
        saldoD: this.saldoDestino,
        idcliente: this.IdUsusario,
      }
      this.api.Tranferencia(x).subscribe(res=>{
       this.exito(res);
       this.route.navigate(['/home'])
      })

    }
  }

  validaSaldoO(){
    let x = {
      funcion: 'validaSaldo',
      idCuenta: this.origen,
    }
    this.api.validaSaldo(x).subscribe(res=>{
      this.saldoOrigen=res;
      this.saldoOrigen=this.saldoOrigen.saldo;
    })
  }

  validaSaldoD(){
    let x = {
      funcion: 'validaSaldo',
      idCuenta: this.destino,
    }
    this.api.validaSaldo(x).subscribe(res=>{
      this.saldoDestino=res;
      this.saldoDestino=this.saldoDestino.saldo;
    })
  }

  async errorAlert(data){
    const modal = await this.modal.create({
      component: ErrorComponent,
      cssClass: 'my-custom-modal-css-alert',
      componentProps:{
       data: data
      },
      showBackdrop:true,
      backdropDismiss:false,
    } )
 
   return await modal.present();  
 
  }

  async exito(data){
    const modal = await this.modal.create({
      component: ExitoComponent,
      cssClass: 'my-custom-modal-css-alert',
      componentProps:{
       data: data
      },
      showBackdrop:true,
      backdropDismiss:false,
    } )
 
   return await modal.present();  
 
  }
  
}
