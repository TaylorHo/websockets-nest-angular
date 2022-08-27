import { Controller, Get } from '@nestjs/common';

// Here's a common HTTP API, alongside the websockets service
// http://localhost:3000/api

@Controller('api')
export class HttpApiController {

  // get /api/ endpoint
  @Get()
  getEndpoint(): string {
    return "This is an HTTP endoint!!";
  }

}
