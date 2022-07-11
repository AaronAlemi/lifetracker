# Week 4 Assignment: Life Tracker

Submitted by: **Aaron Alemi**

Deployed Application: [Lifetracker Deployed Site](ADD_LINK_HERE)

## Application Features

### Core Features

- [X] **The Nav Bar:** Implement customized views for users who are logged in vs not logged in.
  - [X] If the user is logged in, it should display a **Sign Out** button. 
  - [X] If no user is logged in, it should display **Login** and **Register** buttons
  - [X] Display a logo on the far left side, and contain links to the individual detailed activity page. 
- [X] **The Landing Page:** Display a large hero image and a brief blurb on what this application is about
- [X] **Login Page:** A form that allows users to login with email and password.
- [X] **Registration Page:** A form that allows the user to sign up with their email, password, username, first name, and last name.
- [X] When a user first authenticates, they should be redirected to an authenticated view (i.e the detailed activity page). When they sign out, all frontend data should be reset.
- [ ] Users have access to an overview Activity page that show one summary statistic about each of the 3 types of activity tracked.
- [X] The API should have a `security` middleware that only allows authenticated users to access resources and only allows users to access resources about themselves. 
- [ ] Users should have the ability to track at least **1** types of activities (i.e Nutrition, Exercise, Sleep, etc.). Each activity should be tracked on separate pages.
- [ ] Deployed website with Heroku & Surge. 

**Detailed Activity Page:**
- [ ] The detailed activity page should display a feed of all previous tracked activities.
- [ ] The detailed activity should contain a form to contain relevant information. (i.e if tracking nutrition this form allows the user to capture calories, timestamp, image, category, etc.) 
- [ ] The activity tracked should be given a unique id for easy lookup.
  `TODO://` Add link to table schema in the link code below. Your file should end in `.sql` and show your schema for the detailed activities table. (🚫 Remove this paragraph after adding schema link)
  * [Table Schema](📝ADD LINK TO TABLE SCHEMA.sql HERE!) 

### Stretch Features

Implement any of the following features to improve the application:
- [ ] Each model (`nutrition`, `exercise`, and `sleep`) should also implement a `fetchById` method that queries the database for a record by its id and only serves it to users who own that resource. Create a new dynamic route on the frontend that displays detail about a single record. For instance, `nutrition/detail/:id` should show a page with all the information about a single nutrition item.
- [ ] Provide a dropdown that allows users to filter activity based on a certain attribute of any activity item.
- [ ] Calculate aggregate statistics based on time periods - such as daily, weekly, monthly aggregates.
- [ ] Create a page that shows all other users that use the life tracker application and allow users to follow each other.

### Walkthrough Video

Week 4: 

https://user-images.githubusercontent.com/91973579/176980584-9c275dda-648f-4b5f-b2fb-f8fa8b47e975.mp4

Week 5:


https://user-images.githubusercontent.com/91973579/178084468-4c6a4928-bf39-4b83-823b-ec462c283fb4.mp4


### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

Week 4:
I felt as though the topics in the labs somewhat helped with giving me a general understanding of SQL queries and how to implement an SQL database along with my backend. However, I also felt that I needed to learn a lot of stuff from scratch such as the web tokens and impleneting that into my registration and login functions in the backend.

Week 5:
The topics in the labs did help me a little with regards to setting up my basic backend and handling basic authentication/authorization. However, I did have to learn everything else as I went along for the first time such as connecting my backend and frontend together as well as getting the backend authentication to work on my frontend.

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.

Week 4:
With more time I would have liked to make some more progress in integrating my backend into my frontend. I also would have liked to get more done on the frontend side with regards to the UI although I am currently saving that for last. Additionally, I would have also liked to implement the nutrition information, so that is something that I will have to work on in the future.

Week 5:
With more time I would like to finish all the core features such as getting my nutrition information to show up on my front end, along with allowing the users to set nutrition information directly in the frontend as well. In addition, I would also like to be able to deploy it to Heroku and make the CSS look a bit nicer as well.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Week 4:
In the demo, i think my backend went well although I didn't have much to show for my frontend side as I didn't focus on that as much, so that could've been done better. I did notice some people made really nice UI's that used custom images and gradients, so if possible I would like to try and implement that into my project next week.

Week 5:
In my demo I think my backend features were okay although I do need to work on my overall presenting skills more to only cover the important bits. I noticed some people had filters for their nutrition information which is a nice feature I could try and implement in mine.

### Open-source libraries used

- N/A

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

I would like to shout out my pod members Doris and Katherin as they were both very helpful in helping to to resolve several issues I was facing, both in regards to this project and Git as well. In both weeks they have both been extremely helpful and collaborative and helped me tremendously.
