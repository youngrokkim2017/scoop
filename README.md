# Scoop

**Scoop**, inspired by *Yelp*, is an online platform that allows users to discover dessert parlors, view business information, and read and write reviews about a business.

[Live Demo](https://app-scoop.herokuapp.com/#/)

## Table of Content
* [Technologies](#technologies)
* [Installation](#installation)
* [Features](#features)

## Technologies
* Database: PostgreSQL
* Backend: Ruby on Rails
* Frontend: React.js, Redux.js, JavaScript, jQuery
* Goodle Map API

## Installation

### Prerequisites
Postgres Database is required to operate correctly.

### Setup
```
bundle install
npm install
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec rails db:seed
```

### Running the App
```
rails s
npm start
```

## Features
* Users can browse through the available businesses on the site
* Search for businesses by name, category, or location
* Create, Read, Update, or Destory a review which is dynamically rendered in real time in the frontend
* Can react to reviews

### User Authentication
* Frontend to backend user authentication using BCrypt
* Demo user option available for those who want to check out features of the site without having to make an account
