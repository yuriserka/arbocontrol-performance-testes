# arbocontrol-performance-testes

Repositório com o fim de realizar os testes de performance/carga voltados para o backend do sistema do Arbocontrol.

## Programas necessários

- [NodeJS e NPM](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)
- [Yarn](https://yarnpkg.com/)

## Executando os testes

- Inicialize o Docker
- Navegue até a pasta onde se encontra  a configuração dos containers de testes do Arbocontrol e execute
    ```
    $ docker-compose pull
    $ docker-compose up
    ```
- instale as dependencias necessárias do projeto com:
    ```
    $ yarn
    ```
- abra outro terminal e execute o comando abaixo para executar o teste de carga
    ```
    $ yarn launch
    ```

## Checando os resultados

Os resultados dos testes são criados após o fim da execução dos mesmos e estão dispostos em gráficos. Basta abrir o arquivo [reports/index.html](reports/index.html) em algum navegador.
