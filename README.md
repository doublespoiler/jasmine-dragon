# Jasmine Dragon

### By Skylan Lew

### A React app for Epicodus Independent Project 13

## Technologies Used

* HTML/CSS
* Javascript/ES6
* React 18.2
* node.js 16.16.0
* npm 8.11.0
* uuid

## Description

This is a POS and inventory management system for a tea shop, created with React. It uses a Class component to hold its state, and `setState` to change state. The user can Create new teas, Read details of already saved teas, Update already saved teas, and  Delete unneeded teas. The user may sell cups of tea, one at a time, until the amount reaches 0, at which point they will not be able to sell more of that tea.

The user can edit `/src/defaultTeaList.js` to add or remove pre-seeded teas, and change their properties. THere is a handy `teaObject.txt` file for easy copy/pasting of the blank object. Unique IDs will be generated automatically, as long as `id` is assigned with `v4()`.

## Setup Instructions

### Requires

* node.js
* npm
* React

### Install/Run

* `git clone https://github.com/doublespoiler/jasmine-dragon.git`
* `cd jasmine-dragon`
* `npm install`
* `npm run start`
* visit [http://localhost:3000](http://localhost:3000)

## Known Bugs

* eslint: import/no-anonymous-default-export with `defaultTeaList.js`

## License

[MIT](https://choosealicense.com/licenses/mit/) `[MIT](https://choosealicense.com/licenses/mit/)`

Copyright (c) 2022 Skylan Lew
