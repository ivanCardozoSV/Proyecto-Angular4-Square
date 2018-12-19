import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';

import { AgmCoreModule } from '@agm/core';
import { ResaltarDirective } from './directives/resaltar/resaltar.directive';
import { ContarClicksDirective } from './directives/clicks/contar-clicks.directive';
import { Routing } from './app.routing';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LugaresService } from './services/lugares.service';
import { CrearComponent } from './crear/crear.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AutorizacionService } from './services/autorizacion.service';
import { MyGuardService } from './services/my-guard.service';

export const firebaseConfig = {
  apiKey: "AIzaSyDmIjBYqhpY1C84SPjvMv_fb4RN0QC8pIY",
   authDomain: "square-222302.firebaseapp.com",
   databaseURL: "https://square-222302.firebaseio.com",
   projectId: "square-222302",
   storageBucket: "square-222302.appspot.com",
   messagingSenderId: "489584955398"
};

@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent,
    LugaresComponent,
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    Routing,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBQVf0ORpvGRSLetPtUGzJfgTXz8p4SVK8'
    })
  ],
  providers: [LugaresService, AutorizacionService, MyGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
