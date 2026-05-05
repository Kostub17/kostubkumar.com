import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);  // ← add await here
  app.enableCors({
  origin: [
    'http://localhost:5173',
    'https://your-app.vercel.app', // add this after deploying frontend
  ],
});
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();