# Dashboard de Monitoramento Cambial

Aplicação front-end desenvolvida para monitoramento em tempo real da cotação do Dólar Americano (USD) em relação ao Real Brasileiro (BRL), utilizando a AwesomeAPI. O projeto prioriza o uso de padrões modernos de desenvolvimento, modularização de código e tratamento de estados assíncronos. [cite: 2026-02-24]

## Tecnologias e Ferramentas

* **Vite**: Ferramenta de build e servidor de desenvolvimento otimizado. [cite: 2026-02-24]
* **JavaScript (ES6+)**: Implementação de Módulos (ESM), funções assíncronas (async/await) e API Fetch. [cite: 2026-02-24]
* **CSS3**: Estilização baseada em variáveis (Custom Properties) e layout responsivo. [cite: 2026-02-24]
* **AwesomeAPI**: Interface de programação para obtenção de dados financeiros.
* **Node.js & NPM**: Gestão de dependências e automação de scripts.

## Arquitetura do Projeto

O projeto segue o princípio de separação de responsabilidades (SoC): [cite: 2026-02-24]

* **src/js/api.js**: Módulo isolado responsável exclusivamente pela comunicação com o endpoint externo e tratamento de erros de rede. [cite: 2026-02-24]
* **src/js/main.js**: Controlador da aplicação que gerencia a lógica de interface, manipulação do DOM e formatação de dados. [cite: 2026-02-24]

## Funcionalidades Implementadas

* **Consumo de API Assíncrono**: Gerenciamento de promessas para atualização dinâmica de dados. [cite: 2026-02-24]
* **Feedback de Interface**: Exibição de estado de carregamento durante as requisições.
* **Lógica de Variação**: Diferenciação visual automática entre tendências de alta ou baixa do mercado.
* **Internacionalização**: Formatação de moeda e datas conforme o padrão brasileiro (pt-BR) utilizando a API Intl.
* **Tratamento de Exceções**: Robustez do sistema através de blocos try/catch para evitar falhas silenciosas. [cite: 2026-02-24]

## Instruções para Execução

### Pré-requisitos
* Node.js instalado (versão LTS).
* Gerenciador de pacotes NPM.

### Procedimento Local
1. Clone este repositório em sua máquina local.
2. Acesse o diretório do projeto via terminal.
3. Instale as dependências:
   ```bash
   npm install
