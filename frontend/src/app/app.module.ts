import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EquipmentComponent } from './components/equipment/equipment.component';
import { EquipmentCardComponent } from './components/equipment-card/equipment-card.component';
import { NoEquipmentComponent } from './components/no-equipment/no-equipment.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ToastComponent } from './components/toast/toast.component';
const config: SocketIoConfig = { url: 'http://127.0.0.1:3000', options: { transports: ['websocket'] } };

@NgModule({
  declarations: [
    AppComponent,
    EquipmentComponent,
    EquipmentCardComponent,
    NoEquipmentComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
