import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioDetailsComponent } from './funcionario-details/funcionario-details.component';
import { FuncionarioListComponent } from './funcionario-list/funcionario-list.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { FuncionarioUpdateComponent } from './funcionario-update/funcionario-update.component';

@NgModule({
  declarations: [
    AppComponent,
  
    FuncionarioDetailsComponent,
    FuncionarioListComponent,
    FuncionarioFormComponent,
    FuncionarioUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
