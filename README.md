# BlankPage - task two

#### Hello guys!

Your task will be split into two parts, one for frontend and one for server. Which are located in corresponding folders. To begin with:  clone this repository to Your local machine - it contains basic setup for svelte with postcss + tailwindcss and express server. To finish this task You have *3 days*. 
Commenting or taking notes is recommended as I will require You to guide me through the app. You can change folder structure / names to Your fitting, as well as install external libraries for handling certain tasks. *Good luck!*

## Server

1. Create endpoint /movies with GET method
    - response should contain content of movies.json file
2. Create endpoint /movies:id with GET and UPDATE method
   - UPDATE method should modify in-memory movies array based on request payload
   - save it (whole modified array) locally as json file with filename being timestamp of operation ex. '1600680533364.json'
    - respond with changed movie array as json to client
3. Since our server is going to be open API we should take closer look at securing it from spamming our endpoints.

## Frontend
Picking custom router is recommended, sapper or routify being obvious candidates
1. Create simple list view based on server response on /movies endpoint
    - single card should contain fields: title, release_date, director, thumbnail,
   - be aware that objects in array may wary, some might contain some property while other don't
2. Create single movie view /movie:id
    - detailed information about movie, tagline, cast, storyline (if exist)
    - if there's trailer video - display it as inline/iframe/modal
   - each property should be editable, images/videos as url strings
    - under movie info section should be save/update button which will send POST/UPDATE/STH request to server to corresponding endpoint
   - UPDATE response from server should be console.logged.
   
  
