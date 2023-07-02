// let user = {
//   name: "John",
//   age: 30,

//   toString() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   }
// };

// console.log(user);


// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };

// let json = JSON.stringify(student);
// console.log(json);

// let user = {
//     sayHi() {
//         console.log("Hello");
//     },
//     [Symbol("id")]: 123,
//     something: undefined,
// }

// console.log(JSON.stringify(user));

// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };

// console.log(JSON.stringify(meetup));

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"]
// };

// meetup.place = room;
// room.occupiedBy = meetup;

// JSON.stringify(meetup);


// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room
// };

// room.occupiedBy = meetup;
// console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room
// };

// room.occupiedBy = meetup;

// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return (key == 'occupiedBy') ? undefined : value;
// }));

// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };

// console.log(JSON.stringify(user, null, 2));

// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   }
// };

// let meetup = {
//   title: "Conference",
//   room,
//   toJSON() {
//     return this.title;
//   }
// };

// console.log(JSON.stringify(room));
// console.log(JSON.stringify(meetup));

// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// console.log(numbers[1]);

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
// let meetup = JSON.parse(str, function (key, value) {
//   if (key == "date") return new Date(value);
//   return value;
// });

// console.log(meetup.date.getDate());

// let user = {
//   name: "John Johnson",
//   age: 35
// }

// let user1 = JSON.stringify(user);
// console.log(user1);

// let user2 = JSON.parse(user1);
// console.log(user2);

// console.log(localStorage);
// localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 23 }));

// console.log(JSON.parse(localStorage.getItem('my-data')));

import '../src/css/common.css';
import '../src/css/feedback-form.css';

const refs = {
    form: document.querySelector('js-feedback-form'),
    textarea: document.querySelector('js-feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', onTextareaInput);

function onFormSubmit(evt) {

}

function onTextareaInput(evt) {
    
}

function populateMessageOutput() {}