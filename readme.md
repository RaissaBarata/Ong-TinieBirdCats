# Teste Técnico de Estágio - Ong TinieBird Cats

Este projeto é um teste técnico para uma vaga de estágio, utilizando SASS para pré-processamento de CSS e Gulp para automação de tarefas.

## Pré-requisitos

Certifique-se de ter o seguinte instalado em sua máquina:

- Node.js
- npm (Node Package Manager)

## Instalação

1. Clone este repositório:

```git clone [URL_DO_REPOSITÓRIO]```

2. Navegue até o diretório do projeto:

```cd OngTinieBirdCats```

3. Instale as dependências:

```npm install```

## Comandos disponíveis

### Observar alterações nos arquivos SCSS e HTML

Para iniciar o watcher que compila automaticamente os arquivos SCSS para CSS quando houver alterações e minifica os arquivos HTML e CSS, execute:

```npm run watch```

Este comando utilizará o Gulp para monitorar os arquivos SCSS e index.html para compilá-los em tempo real.

### Buildar o projeto completo

Para buildar o projeto completo, incluindo a compilação do CSS, otimização das imagens e minificação dos arquivos HTML, execute:

```npm run build```

Este comando utilizará o Gulp para executar todas as tarefas necessárias para preparar o projeto na pasta dist.

### Buildar imagens otimizadas

Para buildar e otimizar as imagens do projeto, execute:

```npm run build:images```

Este comando utilizará o Gulp para processar e otimizar as imagens, reduzindo seu tamanho sem perda significativa de qualidade.



## Tecnologias utilizadas

- SASS: Pré-processador CSS
- Gulp: Automatizador de tarefas