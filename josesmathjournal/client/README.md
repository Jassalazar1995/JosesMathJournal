
# Advanced Mathematics Course Website

## Description

Advanced Mathematics Course Website is an educational platform inspired by Khan Academy, focusing on higher-level mathematics. It is designed to facilitate learning through interactive video content, featuring courses on Functional Analysis, Differential Geometry, and Linear Algebra.

## Motivation

Developed during my Software Engineering program at PerScholas, this project embodies a personal goal to make advanced mathematics more accessible. It serves as an ongoing endeavor to enhance my understanding of mathematics and to share this knowledge with others.

## Features

- Interactive chapters with embedded YouTube video content.
- A Pomodoro clock feature to manage study sessions effectively.
- User authentication system with profile management.
- Course pages with structured chapters and subsections.

## Usage

Users can navigate through various mathematical courses via the navigation bar. Selecting a chapter opens up video content and materials for study. The integrated Pomodoro clock assists in time management, promoting focused study intervals followed by short breaks.

## What I learned
I've learned alot during this MOD 3 project. I did learn a lot of technical skills, but one thing I want to highlight is that I learned the importantance of project management and wireframes and pseudocode. I feel like my entire process would have been streamlined and more focused if I had thought out exactly what I needed to create. I have deepened my understanding of Tailwind, although I still have a hard time with it. 

I have got to learn more about backend interactions with MongoDB and all the issues that come with connecting the front end with the backend. I've also learning how to create functional user abilities.


## ERD
A user can write multiple blog posts
A user can make multiple comments
Each blog post can have multiple comments
A User has one score

![Alt text](PXL_20240201_153700967-1.jpg)


## Built With

- **React**: Frontend web framework
- **Axios**: HTTP client for making API requests
- **Redux**: State management library
- **react-youtube**: Component for embedding YouTube videos
- **react-router-dom**: DOM bindings for React Router

## API References

- **YouTube Data API v3**: Used for pulling video content

## Wireframes

- [Wire frames](https://wireframe.cc/pro/pp/b8480d879715989)


## Project Management

- [Trello Board](https://trello.com/b/7vh8qpU7/mod-3-project)

## Dependencies

```
"@reduxjs/toolkit": "^2.1.0",
"autoprefixer": "^10.4.16",
"axios": "^1.6.5",
"postcss": "^8.4.33",
"react": "^18.2.0",
"react-dom": "^18.2.0",
"react-html5video": "^2.5.1",
"react-redux": "^9.0.4",
"react-router-dom": "^6.21.1",
"react-youtube": "^10.1.0",
"redux": "^5.0.1"
```

## Future Features
I would like to add transcriptions, so that when you're watching a video it will highlight the words as they spoken. I would also like to add functionality to the notepad so that you can type in it while watching the video. I would also like for points to auto add once a video is completed. I would also like to add a lot of functionality to the blog, and make the comments appear under the blog posts.


## Unsolved Problems
Blog sometimes doesn't show up properly if you're not logged in. 
Logging in with an invalid login causes a few issues to pop up. I need to investigate that further.
Typing in the notepad refreshes the video. That needs to be fixed