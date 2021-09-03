import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'

const users = [
  {
    id: 1,
    image : 'https://placeimg.com/64/64/1',
    name: 'hwang heewon',
    birthday: 970414,
    gender: 'female',
    job: 'student'
  },
  {
    id: 2,
    image : 'https://placeimg.com/64/64/2',
    name: 'hwang youjin',
    birthday: 980317,
    gender: 'female',
    job: 'student'
  },
  {
    id: 3,
    image : 'https://placeimg.com/64/64/3',
    name: 'lee jihyun',
    birthday: 671120,
    gender: 'female',
    job: 'salary women'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          users.map(user => {
            return (
              <Customer 
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                birthday={user.birthday}
                gender={user.gender}
                job={user.job}/>
            )
          })
        }
      </div>
      )
  }
}

export default App;
