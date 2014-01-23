# MEAN Stack

## INSTALLATION 
```
$ npm install -g bower
```


  Install dependencies:

    $ npm install

  We recommend using [Grunt](https://github.com/gruntjs/grunt-cli) to start the server:

    $ grunt
    
  When not using grunt you can use:

    $ node server
    
  Then open a browser and go to:

    http://localhost:3000

To run with a different environment, just specify NODE_ENV as you call grunt:

	$ NODE_ENV=test grunt

If you are using node instead of grunt, it is very similar:

	$ NODE_ENV=test node server

> NOTE: Running Node.js applications in the __production__ environment enables caching, which is disabled by default in all other environments.

## Getting Started
  We pre-included an article example, check it out:
  * [The Model](https://github.com/linnovate/mean/blob/master/app/models/article.js) - Where we define our object schema.
  * [The Controller](https://github.com/linnovate/mean/blob/master/app/controllers/articles.js) - Where we take care of our backend logic.
  * [NodeJS Routes](https://github.com/linnovate/mean/blob/master/config/routes.js) - Where we define our REST service routes.
  * [AngularJs Routes](https://github.com/linnovate/mean/blob/master/public/js/config.js) - Where we define our CRUD routes.
  * [The AngularJs Service](https://github.com/linnovate/mean/blob/master/public/js/services/articles.js) - Where we connect to our REST service.
  * [The AngularJs Controller](https://github.com/linnovate/mean/blob/master/public/js/controllers/articles.js) - Where we take care of  our frontend logic.
  * [The AngularJs Views Folder](https://github.com/linnovate/mean/blob/master/public/views/articles) - Where we keep our CRUD views.

## Heroku Quick Deployment
Before you start make sure you have <a href="https://toolbelt.heroku.com/">heroku toolbelt</a> installed and an accessible mongo db instance - you can try <a href="http://www.mongohq.com/">mongohq</a> which have an easy setup )

```bash
git init
git add .
git commit -m "initial version"
heroku apps:create
git push heroku master
```

