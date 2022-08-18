import { Module } from '@nestjs/common';
import { CommunicationGateway } from './communication.gateway';

@Module({
  imports: [],
  controllers: [],
  providers: [CommunicationGateway],
})
export class AppModule {}
