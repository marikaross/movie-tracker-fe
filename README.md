# Movie Tracker

This project is working off the The Movie DB API (https://www.themoviedb.org/documentation/api - note you'll need to go create an account to get an API key). The idea of the project is to be able to sign in as a user and save favorite movies.

This repository will serve as your "backend", allowing you to connect to Postgres. You'll need to set up a separate client-side application (use create-react-app), to sit alongside this one. Do not put that project in the same repository as this one, save yourself a headache.

## Projeict Setup

* Clone down this repo and run `npm install`
* If you don't have postgresSQl, scroll down to `Setup Postgresql` and follow those steps.
* Run `npm start` - visit `localhost:3000/api/users` - you should see a json response with a single user.

## Setup Postgresql

#### IMPORTANT: If you already have Postgresql on your computer for some reason, you will need to uninstall it
For information on how to do this read [this](https://postgresapp.com/documentation/remove.html)

#### What is Postgresql?
* PostgreSQL is a powerful, open source object-relational database system

#### Installation:
* Head over to [Postres.app](http://postgresapp.com/) to download and install PostgreSQL
* When you click `initialize`, you should now be able to see that postgreSQL is running
* To be able to use the command line tools, you will need to run the following commannd in your terminal to configure your $PATH `sudo mkdir -p /etc/paths.d && echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`
* You will need to close your terminal window and re-open it for the changes to take effect
  
#### Creating our database
* Make sure you are in you `movie-tracker` project folder
* From the command line, run the following command to create a users database `psql -f ./database/users.sql`
* When you start up the server (`npm install` and `npm start`), you should now be able to visit `localhost:3000/api/users` and see the database with a single user (Taylor)
  
#### Press CMD-T to create a new tab in your terminal
* Type `psql`. This will get you into the interactive postgres terminal. From here you can run postgres and sql commands. You might get an error *psql: FATAL: database "username" does not exist* To resolve this error type *createdb 'somthing does not exist'*

#### [PSQL Commands](http://postgresguide.com/utilities/psql.html)

## API
You will be using the fetch API to make all your api calls. If you are making a post request, note that you will need to pass in an options object with a method and headers - with a `'Content-Type': 'application/json'`. Additionally you will need to pass any any required fields into the body. Check out the [docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for additional info.

###### Users

 * ##### Sign In `/api/users`

  To sign in you will need to pass in *email* and *password* to the *body*.
  Emails should be sent in all lowercase. - ex: `{..., body: {email: 'tim@aol.com', password: 'password'} }`
  The database starts off with a single user inside. -> { email: tman2272@aol.com password: password }. Keep in mind the response will send the entire user back.

* ##### Create Account - `/api/users/new`
  Creating an account must have all input fields filled in (name, email, password)
  You must send all three into the body. Passwords are case sensitive.
  Keep in mind the response only gives the new user ID.

* ##### Add Favorite - `/api/users/favorites/new`
  To save a favorite you must send into the body: movie_id, user_id and title, poster_path, release_date, vote_average, overview.
  Keep in mind the response only gives the new favorite id

* ##### Receive All Favorites - `/api/users/:user_id/favorites`
  To get a users favorite movies you need to send in the user ID through the params. This will return an array favorite objects.

* ##### Delete a Favorite - `/api/users/:user_id/favorites/:movie_id`
  To delete a users favorite you must send in the users id and id of the movie.