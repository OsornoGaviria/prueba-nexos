import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBDService } from '../../servicios/api-bd.service';
import { ErrorComponent } from '../../componentes/error/error.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userName; userPass; dataUser;
  
  constructor(private api: ApiBDService, private route: Router, private modal: ModalController) {}

  ngOnInit() {
  }


  Login(){
    if(this.userName=='' || this.userName==undefined){
        this.errorAlert("Ingrese su nombre de usuario")
    }else if(this.userPass=='' || this.userPass==undefined){
      this.errorAlert("Ingrese su contraseña")
    }else{
      let x = {
        funcion: 'Login',
        username: this.userName,
        userpass: this.userPass
      }
      this.api.Login(x).subscribe(res=>{
         this.dataUser=res;
         console.log(res)
         if(this.dataUser.length>0){
            for(var x=0; x<this.dataUser.length; x++){
              if(this.dataUser[x]['identificacion']!=undefined){
                window.localStorage['IdUsuario']=this.dataUser[x]['identificacion'];   
                this.route.navigate(['/home']);
              }
            }
         }
         else{
          this.errorAlert("Usuario o contraseñña incorrecto")
         }
      })
    
    }
   
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

}
