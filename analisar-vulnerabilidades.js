const fs = require('fs');

// Carregar o conteúdo do arquivo JSON
const jsonString = fs.readFileSync(process.argv[2]);
const jsonData = JSON.parse(jsonString);

// Verificar se a propriedade 'vulnerabilities' existe
if (jsonData && jsonData.vulnerabilities && Array.isArray(jsonData.vulnerabilities)) {
  // Fazer algo com jsonData.vulnerabilities
  const temVulnerabilidades = jsonData.vulnerabilities.some(vulnerabilidade => {
    return vulnerabilidade.severity === 'Medium' || vulnerabilidade.severity === 'High';
  });

  if (temVulnerabilidades) {
    console.log('Encontradas vulnerabilidades de médio ou alto risco.');
  } else {
    console.log('Não foram encontradas vulnerabilidades de médio ou alto risco.');
  }
} else {
  console.error('Formato do arquivo JSON de saída do OWASP ZAP inválido.');
}
