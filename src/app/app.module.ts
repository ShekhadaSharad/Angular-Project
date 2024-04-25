import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridComponent } from './Componet/ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { NavigationComponent } from './Componet/navigation/navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
