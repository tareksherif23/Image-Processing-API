# Image processing API
### A Light weight image processing API built using Typescript and Express.js

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

## Features

- Resize images using the super fast sharp libarary built with c++
- Utilize the project's simple RESTful API to proccess images on the fly 
- Cache the previously processed images to cut the processing latency 


This project is a light weight image image processing API that exposes 
image processing functionalities as endpoints over HTTP as a RESTFUL service
that can be setup as a standalone service or as a third party in any application 

## Tech

The project uses a number of open source projects to work properly:
- [TypeScript] -  a strongly typed programming language that builds on JavaScript
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework
- [Jasmine] - behavior-driven development framework for testing JavaScript code

## Installation

Image processing API requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
cd image-processing
npm i
npm run start
```

## Scripts
```sh
 $ npm run lint        'for running eslint code checking'
 $ npm run clean       'for fixing prettier / eslint auto-fixable issues'
 $ npm run jasmine     'for running test suites'
 $ npm run build       'for compiling TS to JS'
 $ npm run watch       'for compiling ts in watch watch mode'
 $ npm run start       'for starting a production server' 
 $ npm run start:dev   'for starting a dev server with nodemon'
```

## Endpoints 
```sh
http://you_app_host/images?filename={image_name}
http://you_app_host/images?filename={image_name}&width={number}&height={number}
```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact
##### Tarek Marzouk - [LinkedIn](https://www.linkedin.com/in/tarek-marzouk-300b82ab/) - tareksherif23@gmail.com


###### Project Link: https://github.com/tareksherif23/Image-Processing-API


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [TypeScript]: <http://www.typescriptlang.org/>
   [Sharp]: <http://github.com/lovell/sharp>
   [Jasmine]: <http://jasmine.github.io/>
