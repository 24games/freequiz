const fs = require('fs');
const path = require('path');

// Encontrar o arquivo index compilado
const distDir = path.join(__dirname, 'dist', 'assets');
const files = fs.readdirSync(distDir);
const indexFile = files.find(f => f.startsWith('index-') && f.endsWith('.js'));

if (!indexFile) {
  console.error('Arquivo index não encontrado!');
  process.exit(1);
}

const filePath = path.join(distDir, indexFile);
let content = fs.readFileSync(filePath, 'utf8');

// Substituir a pergunta 1 - usando o padrão exato encontrado no arquivo
// O arquivo tem caracteres especiais codificados, então precisamos usar o padrão exato
const oldQuestionPattern1 = 'question:"Ves ftbol regularmente?",options:["S, soy fantico","A veces","No mucho"]';
const newQuestion = 'question:"¿Apostái seguido?",options:["Sí, me gusta","De repente","No mucho"]';

// Substituir usando o padrão exato
if (content.includes(oldQuestionPattern1)) {
  content = content.replace(oldQuestionPattern1, newQuestion);
}

// Também tentar com regex mais flexível para capturar variações de encoding
content = content.replace(
  /question:"[^"]*Ves[^"]*f[^"]*tbol[^"]*regularmente[^"]*",options:\["[^"]*S[^"]*,[^"]*soy[^"]*fan[^"]*tico[^"]*","A veces","No mucho"\]/g,
  newQuestion
);

// Substituir a headline - remover "profesional de" e "análisis de fútbol" separado
content = content.replace(
  /"todos los d[^"]*as en mi grupo profesional de","\s*"an[^"]*lisis de f[^"]*tbol"/,
  '"todos los días en mi grupo de análisis"'
);

// Também tentar substituir se estiver em partes separadas
content = content.replace(
  /"todos los d[^"]*as en mi grupo profesional de"/,
  '"todos los días en mi grupo de análisis"'
);

content = content.replace(
  /"an[^"]*lisis de f[^"]*tbol"/,
  ''
);

// Substituir cr1-a1f2 se ainda não foi substituído
content = content.replace(
  /"cr1-a1f2":"https:\/\/t\.me\/vicentetipstertelegrambot\?start=w48325594"/,
  '"cr1-a1f2":"https://t.me/vicentetipstertelegrambot?start=w48454161"'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('Arquivo atualizado com sucesso!');

