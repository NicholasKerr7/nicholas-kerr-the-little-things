# [The Little Things ]

## Overview

What is your app? Brief description in a couple of sentences.

This app, aimed at families who live in the same houshold, will enable all family members to share schedules, household activites, responsibilites to create a harmonious home life and allowing for more time spent connecting



### Problem

Why is your app needed? Background information around any pain points or other reasons.
There are lots of apps on the market that help teams, collaborate, communicate and share tasks - all of which helps organizations run more efficiently. However there aren't many (if any) apps that gives families, this same type of system, so that they can create more harmonious homes.
Different people within a house have different jobs, schedules, preferences and families who have dependents whether it is children or parents to support, need to integrate their routines also. Historically physical trackers have been used (usually in the kitchen) where everything is written, however this is manual and difficult to collaborate on. This process is in need of digitisation and that is what this app will do. Allow familes to collaborate, communicate and share tasks, so that households can run more efficiently and more time can be spent together, rather than apart completing household activites.


### User Profile

Single or a collaboration of Muliple users to support small/large families,


### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

The core functionality of the App is to deligate task/activities amonst a group of individuals to prioritise and optimise daily plans

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

Technologies that will be used to create this app:
-react,
-Sass,
-Node(Express),
-database(MYSQL).

### APIs



## Implementation

### Sitemap

A mockup has been provided to show the concept of the app

### Mockups


### Endpoints


GET
get ("/") = 
Get ("/:id/user") = get all the user data(task and activities)
Get ("/:id/todos") =  get a single todo 
Get ("/:id/activities") =  get a single activity 

POST/PUT
post ("/user") = post a new user
post ("/:id/todo") = post a new todo
post ("/:id/activity") = post a new activity

UPDATE
update ("/:id/edit") = edit a post

DELETE
delete ("/:id/todos") = delete a todo 
delete ("/:id/activity") = delete a activity

get a single activity.

```
[
    {
        id: "uuid"
        activity: "holiday",
        date_created: "14/3/2023",
        due_date: "21/4/2023",
        done: true
    },
]
```

get a single todo item.

```
[
    {
        id: "uuid"
        todo: "Groceries",
        date_created: "14/6/2023",
        due_date: "21/6/2023",
        done: false
    },
]
```
delete a todo/activity item.

```
[
    {
        id: "uuid"
        todo/activity: "",
    
    },
]
```
update a single item.

```
[
    {
        id: "uuid"
        todo: "",
        date_created: "",
        due_date: "",
        done: false
    },
]
```

### Database

a mockup database has been provided in the folder.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

Days    Milestones	Goal
Day1	1	Create database and design models
Day1	2	Build server boilerplate and hook up to database
Day2	3 	Define all Endpoints in express, connect endpoints to any external web api
Day2	4 	Implement functionality of endpoints - create JSON response and verify endpoint responses
Day3-6	5	Build React App overall structure and high-level components
Day7	6 	Connect smart components to end-point APIs
Day8	7 	Test/debug end-to-end functionality of app
Day9	8 	Implement CSS/Styling 
Day10	9	Code Clean up, last minute testing/debugging
Day11	10 	DEPLOYMENT
	11	DEMO DAY


## Nice-to-haves

Multiple users that can share task and view each other task.
