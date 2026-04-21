import { Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Catch(RpcException)
export class KafkaRpcExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException) {
    return exception.getError(); // serialized to Kafka response
  }
}