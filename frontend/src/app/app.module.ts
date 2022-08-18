import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { EquipmentCardComponent } from './components/equipment-card/equipment-card.component';
import { NoEquipmentComponent } from './components/no-equipment/no-equipment.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: 'http://localhost:3000', options: { transports: ['websocket'] } };

@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    EquipmentCardComponent,
    NoEquipmentComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
