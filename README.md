# Name of Project

One Paragraph of project description goes here. Link to the live version of the app if it's hosted on Heroku.

## Built With

* react v18
* node v18.3.0
* mySQL
* redux
* see package.json for dependencies

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here


### Installing

Steps to get the development environment running.

```sql
CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);
```

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

## Documentation

Link to a read-only version of your scope document or other relevant documentation here (optional). Remove if unused.

### Completed Features

High level list of items completed.

- [x] Create daily chores list
- [x] Delete daily chores list by id
- [x] Update daily chores list by id
- [x] toggle is complete by daily chore list  
      (feature-a)
- [x] global reset button
- [x] toggle is complete if all li are complete

### Next Steps

Features that you would like to add at some point in the future.


## Deployment

Add additional notes about how to deploy this on a live system

## Authors

* Amanda


## Acknowledgments

* Hat tip to anyone who's code was used