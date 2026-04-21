import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { KafkaRpcExceptionFilter } from './common/filters/rpc-exception.filter';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(AppModule);
  const configService = appContext.get(ConfigService);

  const kafkaBrokers = configService.get<string>('KAFKA_BROKERS', '').split(',');
  const kafkaGroupId = configService.get<string>('KAFKA_GROUP_ID', 'playground-2-group');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: kafkaBrokers,
        clientId: configService.get<string>('KAFKA_CLIENT_NAME', 'playground-2-service'),
      },
      consumer: {
        groupId: kafkaGroupId,
      },
    },
  });
  app.useGlobalFilters(new KafkaRpcExceptionFilter());
  await app.listen();
  console.log('NestJS Microservice is listening...');
}

bootstrap();
