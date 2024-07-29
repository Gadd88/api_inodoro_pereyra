import fs from 'fs';
import path from 'path';
import swaggerUi from 'swagger-ui-express';
import yaml from 'yaml';
import { Application } from 'express';

const file = fs.readFileSync(path.resolve(__dirname, 'swagger.yaml'), 'utf8');
const swaggerYaml = yaml.parse(file);

export const swaggerDocs = (app: Application, port: number) => {
  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerYaml));
  app.get('/api/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerYaml);
  });

  console.log(`📄 Version 1 Docs available at http://localhost:${port}/api/docs`);
};


