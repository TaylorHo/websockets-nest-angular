import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';

// this line makes the WebSockets connection possible
@WebSocketGateway()
export class WebsocketsGateway implements OnGatewayConnection, OnGatewayDisconnect {

  // the server, used to send the messages to the connected clients
  @WebSocketServer() server: any;

  // a new client has connected
  async handleConnection() {
    this.server.emit('equipment', 'enter');
  }

  // a connected client has disconnected
  async handleDisconnect() {
    this.server.emit('equipment', 'left');
  }

  // server listening for incoming messages
  @SubscribeMessage('communication')
  async onCommunicationReceived(
    client: any, // who is sending the message
    message: any, // the data that is being sent
    ) {
    client.broadcast.emit('communication', message);
  }

}