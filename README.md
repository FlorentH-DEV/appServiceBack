<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

Ce projet utilisera le DBFirst.
Les classes contenues dans le dossier mod??le servirons ?? g??n??rer la base de donn??e

## Quelques explication

Le projet est constitu?? de 5 parties :
   1. Le dossier controller
   2. Le dossier dal
   3. Le dossier model
   4. Le dossier service
   5. Le dossier interface
   
   ### Dossier controller
   Vous pourrez trouver tous les controllers pr??sents dans l'applicatif.
   Chaque fois que vous cr??ez un controller, vous devez le renseigner dans le fichier app.module.ts.
   Vous devez ajouter le controller cr??er ?? la liste des controllers.
   Les controllers sont le points d'entr??e du programme. 
   
   ### Dossier service
   Une fois la requ??te arriv??e au controller, si nous avons besoin de logique (calcul, requ??tes sur la BDD etc ...), vouos devez la renseigner dans le fichier service associ??.
  Pour la cr??ation d'un nouveau fichier de service, vous devez le renseigner dans le fichier app.module.ts et le rajouter au tableu de service d??j?? pr??sent.
  
  ### le dossier dal
  Le dossier dal (Data acces layer) contient tous les acc??s ?? la base de donn??e, quand vous devez acc??der ?? la BDD, vous devez le faire d'ici
  
  ### Le dossier model
  Il contient les mod??les de l'applicatif, qui peuvent ??tre utilis?? en dehors de la base de donn??e.
  Ce dossier contient aussi un dossier typeorm. C'est ici, que nous allons retrouver toutes les mod??les de la BDD
  
  ### le dossier interface
  Il contient toutes les interfaces de l'applicatif.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run dev
il lance le mode debug et le mode watcher

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil My??liwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
