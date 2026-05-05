import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  // ← add await here
  app.enableCors({
    origin: 'http://localhost:5173', // your React dev URL for now
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();