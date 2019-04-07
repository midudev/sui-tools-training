
# Search Movies

### Introduction

I create a search movies with imdb API.
The user can look for any movies and then go to the detail.

### Details about app

In order to give value to the app, I add debounce function. This function is responsible to, instead of trying to search a movie in every change that the user do, just make the call every 300 ms.

Also I add a cache to keep the last searches, in order to not have to call the server twice for the same data and have a quicker response.
In this cache is kept the complete response of a query, I mean the whole object, instead of every movie detail, which would be more efficient because if the user look for two queries as for example 'avengers' and  'the avengers', there would be some detail movies that is keeping twice.
I decided to do this option because this api return the response as an array of objects instead of an array of id's. 






