# laravel-vue-spa-boilerplate

## About

This is a boilerplate project for applications using a Laravel Backend with a Single Page Application using VueJS and Vuetify.

### Assumptions
This project assumes the user has a base knowledge of Laravel and VueJS, documentation can be found here:
* [Laravel](https://laravel.com/)
* [VueJS](https://vuejs.org/)

The styling for the frontend is done using [Vuetify](https://vuetifyjs.com/), exploring this documentation will help you understand the components and tags used in the frontend.

## Installation
Assuming you have PHP, MySQL, and a Web Server installed (or you are using a Vagrant machine like Laravel's [Homestead](https://laravel.com/docs/5.5/homestead)) to get this project running simply:

`git clone https://github.com/aturingmachine/laravel-vue-spa-boilerplate.git <directory name>`

**IF YOU ARE USING A VAGRANT MACHINE DO THESE COMMANDS INSIDE THE VM**

Then 

>Make our own `.env`
>`cp .env.example .env` 

>Generate a Key for the application
>`php artisan key:generate`

>`npm install`

>`composer install`

>`npm run dev` _This should be done after any changes to the Vue application_

>_alternatively_ 

>`npm run watch` _This will watch for changes made to the JS section of the build_

Then navigate to wherever the application lives and you should see the Vue Application.

## Project Structure

### Frontend

`/resources/`

  &nbsp;&nbsp;`/assets/js/` Here lives all of your JavaScript for the Front End of the application

  &nbsp;&nbsp;&nbsp;&nbsp;`/components/` Here is where we will place new Vue Components, an example is already there for you.

  &nbsp;&nbsp;&nbsp;&nbsp;`/config/` Any config .js files you need, a base [Axios](https://github.com/axios/axios) config is here already. You can create more Axios configs &nbsp;&nbsp;&nbsp;&nbsp;simply by following the same conventions laid out in this file. 

  &nbsp;&nbsp;&nbsp;&nbsp;`/router/` The `index.js` of this directory is used to set all routes and rules for the `vue-router` we use.

  &nbsp;&nbsp;&nbsp;&nbsp;`/stylus/` The Vuetify styling is in here, we need not worry about it.
    
  &nbsp;&nbsp;&nbsp;&nbsp;`/app.js` This is the main driver of the frontend application, unless you are adding new node modules to it, this &nbsp;&nbsp;&nbsp;&nbsp;should work out of the box.
    
  &nbsp;&nbsp;&nbsp;&nbsp;`/App.vue` This is the main Vue component. It is a toolbar, nav-drawer, and footer with a router view in the middle &nbsp;&nbsp;&nbsp;&nbsp;where other components are displayed.
  
  &nbsp;&nbsp;`/views/app.blade.php` This is a simple file that has our Vue application dropped into it.

### Backend

The backend of this project follows the same conventions of Laravel. I suggest looking into their documentation and familiarizing yourself with the `php artisan` commands. They are used to create everything you need including **Models, Migrations, and Controllers**.

## Notes
  This project appears to be mostly CSS which is due to the Vuetify Styling being hardcoded into it. If this ever needs to change simply add a `.stylus(<source of stylus>, <CSS output>)`. This will pack the CSS however due to laravel-mix it will fail, running the `npm run *` again will succesfully build the project as it can now find the compiled CSS.