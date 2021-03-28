import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


//Componentes
import { MovimientosComponent } from './componentes/movimientos/movimientos.component'
import { ErrorComponent } from './componentes/error/error.component'
import { ExitoComponent } from './componentes/exito/exito.component'
import { Exito2Component } from './componentes/exito2/exito2.component';

@NgModule({
  declarations: [AppComponent, MovimientosComponent, ExitoComponent, ErrorComponent],
  entryComponents: [MovimientosComponent, ExitoComponent, ErrorComponent],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
