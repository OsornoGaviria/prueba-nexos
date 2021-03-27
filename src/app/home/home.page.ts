import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBDService } from '../servicios/api-bd.service';
import { MovimientosComponent } from '../componentes/movimientos/movimientos.component'
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  IdUsusario; 
  nameUsuario;
  dataUsuario;
  productos;

  constructor(private api: ApiBDService, private route: Router, private modal:ModalController) {}

  ngOnInit(){
    this.IdUsusario=window.localStorage['IdUsuario'];
    if(window.localStorage['IdUsuario']==undefined){
      this.route.navigate(['/login'])
    }
    else{
      this.VerUsuarios();
      this.verProductosUsuario();
    }
    
  }

  VerUsuarios(){
    let x = {
      funcion: 'verClientes',
      idcliente: this.IdUsusario,
    }
    this.api.verClientes(x).subscribe(res=>{
       this.dataUsuario=res;
       for(var x=0; x<this.dataUsuario.length; x++){
        this.nameUsuario=this.dataUsuario[x]['nombre']; 
      }
    })
  
  }


  verProductosUsuario(){
    let x = {
      funcion: 'verProductos',
      idcliente: this.IdUsusario,
    }
    this.api.verProductos(x).subscribe(res=>{
      this.productos=res;
      console.log(res) 
    })
  }


 async movimientos(x){
  const modal = await this.modal.create({
    component: MovimientosComponent,
    cssClass: 'my-custom-modal-css-alert',
    componentProps:{
     data: x
    },
    showBackdrop:true,
    backdropDismiss:false,
  } )

 return await modal.present();  

  }

}
