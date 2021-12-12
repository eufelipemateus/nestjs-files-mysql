# Salvar arquivos no Nestjs + Mysql

Este projeto consiste em um template de  projeto que salva arquivos no banco de dados mysql.

## Sql

```sql
CREATE TABLE IF NOT EXISTS `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` longblob NOT NULL,
  `file` varchar(255) NOT NULL,
  `content_type` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
)
```

## Instalando

### Clonando

```bash
 git clone https://github.com/eufelipemateus/nestjs-files-mysql.git
````

### instalando

```bash
npm install 
````

## Executando

```bash
npm start
```
  
## Rotas

| method | path | descrição|
|--|--|--|
| POST| /files|Esta rota salva o arquivo no banco de dados
| GET| /files| Esta rota lista todos os arquivos do banco de dados.
| GET| /files/view/:id| Esta rota retorna faz o donwload do arquivo

## Post
[Slavando arquivos no mysql usando nestjs](https://felipemateus.com/blog/2021/12/mysql-salvando-arquivos-com-nestjs-mysql)

## Author

**[Felipe Mateus](https://eufelipemateus.com/)**  -  [eufelipemateus](https://github.com/eufelipemateus)
