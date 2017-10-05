# laravel-vue-spa-boilerplate

## About

This is a boilerplate project for applications using a Laravel Backend with a Single Page Application using VueJS and Vuetify.

### Assumptions
This project assumes the user has a base knowledge of Laravel and VueJS, documentation can be found here:
* [Laravel](https://laravel.com/)
* [VueJS] (https://vuejs.org/)

The styling for the frontend is done using [Vuetify](https://vuetifyjs.com/), exploring this documentation will help you understand the components and tags used in the frontend.

## Installation
Assuming you have PHP, MySQL, and a Web Server installed (or you are using a Vagrant machine like Laravel's [Homestead](https://laravel.com/docs/5.5/homestead)) to get this project running simply:

`git clone https://github.com/aturingmachine/laravel-vue-spa-boilerplate.git <directory name>`

**IF YOU ARE USING A VAGRANT MACHINE DO THESE COMMANDS INSIDE THE VM**

Then
`php artisan key:generate`

`npm install`

`composer install`

_This should be done after any changes to the Vue application_
`npm run dev` _alternatively_ `npm run watch`

_`npm run watch` will watch for changes made to the JS section of the build_

Then navigate to wherever the application lives and you should see the Vue Application.

## Project Structure

`/resources/`

  `/assets/js/` Here lives all of your JavaScript for the Front End of the application

    `/components/` Here is where we will place new Vue Components, an example is already there for you

    `/config/` Any config .js files you need, a base [Axios](https://github.com/axios/axios) config is here already

    `/router/` The `index.js` of this directory is used to set all routes and rules for the `vue-router` we use.

    `/stylus/` The Vuetify styling is in here, we need not worry about it.
    
    `/app.js` This is the main driver of the frontend application, unless you are adding new node modules to it, this should work out of the box.
    
    `/App.vue` This is the main Vue component. It is a toolbar, nav-drawer, and footer with a router view in the middle where other components are displayed.
  
  `/views/app.blade.php` This is a simple file that has our Vue application dropped into it.