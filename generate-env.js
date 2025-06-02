
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const envFile = './src/environments/environment.template.ts';
const outputFile = './src/environments/environment.ts';

const template = fs.readFileSync(envFile, 'utf8');
const replaced = template.replace('$API_URL', process.env.API_URL ?? '');

fs.writeFileSync(outputFile, replaced);

console.log(`✔️  environment.ts generado con API_URL: ${process.env.API_URL}`);
