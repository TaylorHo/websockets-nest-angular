import { Module } from '@nestjs/common';
import { WebsocketsGateway } from './websockets.gateway';
import { HttpApiController } from './http-api.controller';

@Module({
  imports: [],
  controllers: [HttpApiController],
  providers: [WebsocketsGateway],
})
export class AppModule {}
