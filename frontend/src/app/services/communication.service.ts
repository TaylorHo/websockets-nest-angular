import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { EquipmentInterface } from '../models/communication';

@Injectable({ providedIn: 'root' })
export class CommunicationService {

  constructor(
    private socket: Socket
  ) {}

  sendData(data: EquipmentInterface) {    
    this.socket.emit('communication', data);
  }

  receiveData(): Observable<any> {
    return this.socket.fromEvent('communication');
  }

  connectedEquipments(): Observable<string> {
    return this.socket.fromEvent('equipment');
  }

}