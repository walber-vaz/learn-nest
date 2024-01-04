import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as compression from 'compression';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { ValidationError } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: (errors: ValidationError[] = []) => {
        return new BadRequestException(
          errors.map((error) => {
            return {
              field: error.property,
              message: Object.values(error.constraints).join(', '),
            };
          }),
        );
      },
    }),
  );
  app.use(helmet());
  app.use(compression());

  await app.listen(3000);
}
bootstrap();
