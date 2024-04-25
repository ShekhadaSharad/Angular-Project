import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    AgGridModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
