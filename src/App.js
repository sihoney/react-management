import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer'
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth : 1080
  }
})

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
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>이미지</TableCell>
                <TableCell>이름</TableCell>
                <TableCell>생년월일</TableCell>
                <TableCell>성별</TableCell>
                <TableCell>직업</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map(user => {return (<Customer key={user.id} id={user.id} image={user.image} name={user.name} birthday={user.birthday} gender={user.gender} job={user.job}/>)})}
            </TableBody>
        </Table>
      </Paper>
    )
  }
}

export default withStyles(styles)(App);
