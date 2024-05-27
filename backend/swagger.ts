
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { Router } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Hotel Booking API Documentation",
      version: "1.0.0",
      description: "Documentation of our project",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [
    "./src/routes/auth.ts",
    "./src/routes/hotels.ts",
    "./src/routes/my-bookings.ts",
    "./src/routes/my-hotels.ts",
    "./src/routes/users.ts",
  ],
};

const specs = swaggerJsdoc(swaggerOptions);

const router = Router();

router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

export default router;
