const fs = require('fs');

const analisarVulnerabilidades = () => {
  try {
    // Ler o conteúdo do arquivo de saída do OWASP ZAP
    const rawData = fs.readFileSync('zap-output.json');
    const zapOutput = JSON.parse(rawData);

    // Verificar se há vulnerabilidades de grau "alto" e "medium"
    const possuiAlto = zapOutput.vulnerabilidades.some(vuln => vuln.grau === 'alto');
    const possuiMedium = zapOutput.vulnerabilidades.some(vuln => vuln.grau === 'medium');

    if (possuiAlto && possuiMedium) {
      console.log('Encontrou vulnerabilidades de grau alto e medium. Ação OK.');
    } else if (possuiAlto || possuiMedium) {
      console.log('Encontrou vulnerabilidade de grau médio ou alto. Ação OK.');
    } else {
      console.log('Não encontrou vulnerabilidades.');
    }
  } catch (error) {
    console.error('Erro ao analisar saída do OWASP ZAP:', error.message);
    process.exit(1);
  }
};

analisarVulnerabilidades();
