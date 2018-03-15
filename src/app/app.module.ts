import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { DetalleComponent } from './casas/detalle/detalle.component';
import { CasasComponent } from './casas/casas.component';

//Services
import { CasaService } from './providers/casa.service';
import { FilterCasa } from './pipes/filter.pipe';
import { FormularioComponent } from './formulario/formulario.component';

//pipes



@NgModule({
  declarations: [
    AppComponent,
    DetalleComponent,
    CasasComponent,
    FilterCasa,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule,
    CasaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
