# REST API para gerenciar crushes com MongoDB e TypeScript

Implementação de uma REST API para gerenciamento de crushes, com MongoDB e TypeScript. Projeto criado durante o bootcamp do Carrefour na [Digital Innovation One](https://digitalinnovation.one/ "Digital Innovation One").

## Execução do projeto

Para executar a API troque o caminho **D:/Felipe/Documents/DIO/webnar** presente na propriedade start do arquivo [package.json](https://github.com/Fefefx/CrushAPI/blob/master/package.json/ "package.json"), pelo caminho dos arquivos do projeto no seu sistema operacional. Caso utilize Mac ou Linux você pode trocar o caminho por ponto, pois o interpretador fará a detecção do caminho dos arquivos em tempo de execução.

Se estiver no Windows instale o seguinte módulo global para criar um processo NODE_ENV.cmd que definirá a variável de ambiente do NODE:

    npm install -g win-node-env

Após esses preparos, instale as dependências com o comando *npm install*  e em seguida execute o comando *npm start* para subir o servidor express na porta 3000. Você pode visualizar as rotas no arquivo [server/app.ts](https://github.com/Fefefx/CrushAPI/blob/master/server/app.ts "server/app.ts") e testá-las usando uma ferramenta como [Postman](https://www.postman.com/ "Postman").

### Recursos utilizados

1. Banco de dados NoSQL MongoDB
2. TypeScript
3. Mongoose
4. Express
5. Body parser