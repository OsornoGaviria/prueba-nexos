import { Component, OnInit } from '@angular/core';
import { ApiBDService } from '../../servicios/api-bd.service';
import { ModalController } from '@ionic/angular';
import { ErrorComponent } from '../../componentes/error/error.component';
import { ExitoComponent } from '../../componentes/exito/exito.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cterceros',
  templateUrl: './cterceros.page.html',
  styleUrls: ['./cterceros.page.scss'],
})
export class CtercerosPage implements OnInit {
  
  IdUsusario; Cterceros; x=0; productos; origen; destino; saldoOrigen; valor;
  constructor(private api: ApiBDService, private route: Router, private modal: ModalController) { }

  ngOnInit() {
    this.IdUsusario=window.localStorage['IdUsuario'];
    this.VerCterceros();
    this.verProducctos();
  }


  verProducctos(){
    let x = {
      funcion: 'verProductos',
      idcliente: this.IdUsusario,
    }
    this.api.verProductos(x).subscribe(res=>{
      this.productos=res;
      console.log(res)
    })
  }
  

  VerCterceros(){
    let y = {
      funcion: 'VerCterceros',
      idcliente: this.IdUsusario,
    }
    this.api.VerCterceros(y).subscribe(res=>{
       this.Cterceros=res;
       
    })
  }


  validaSaldoO(){
    let x = {
      funcion: 'validaSaldo',
      idCuenta: this.origen,
    }
    this.api.validaSaldo(x).subscribe(res=>{
      this.saldoOrigen=res;
      this.saldoOrigen=this.saldoOrigen.saldo;
      console.log(this.saldoOrigen)
    })
  }


  registrarT(){

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


  aceptar(){
    if(this.origen==undefined || this.origen==""){
      this.errorAlert("Seleccione el producto de origen")
    }else if(this.destino==undefined || this.destino==""){
      this.errorAlert("Seleccione el producto de destino")
    }else if(this.valor==undefined || this.valor=="" || this.valor==0){
      this.errorAlert("Ingrese el valor a tranferir")
    }else if(parseInt(this.valor) > parseInt(this.saldoOrigen)){
      this.errorAlert("Fondos insuficientes")
    }else{
    
      let x = {
        funcion: 'TranferenciaT',
        cOrigen: this.origen,
        cDestino: this.destino,
        valorT: this.valor,
        saldoO: this.saldoOrigen,
        idcliente: this.IdUsusario,
      }
      this.api.TranferenciaT(x).subscribe(res=>{
       this.exito(res);
       this.route.navigate(['/home'])
      })

    }
  }

}
