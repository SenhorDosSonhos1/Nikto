
function analisarLinha(linha) {
  const temMedium = linha.toLowerCase().includes('medium');
  const temAlto = linha.toLowerCase().includes('alto');

  if (temMedium && temAlto) {
    return 'Ok';
  } else if (temMedium || temAlto) {
    return 'Ok se um existir e o outro não';
  } else {
    return 'Não encontrou uma vulnerabilidade';
  }
}

const fs = require('fs');
const relatorioOwasp = fs.readFileSync('relatorio-owasp.txt', 'utf-8');
const linhas = relatorioOwasp.split('\n');

let encontrouVulnerabilidade = false;

for (const linha of linhas) {
  if (analisarLinha(linha) !== 'Não encontrou uma vulnerabilidade') {
    encontrouVulnerabilidade = true;
    break;
  }
}

if (encontrouVulnerabilidade) {
  console.error('Encontrou uma vulnerabilidade de nível médio ou alto! Notifique alguém.');
  process.exit(1);
} else {
  console.log('Não encontrou vulnerabilidades de nível médio ou alto.');
  process.exit(0);
}
