"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: false });
    app.enableCors({ credentials: true, origin: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Tasks Service')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('/', app, document, {
        swaggerOptions: {
            persistAuthorization: true,
        },
    });
    await app.listen(parseInt(process.env.PORT) || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map