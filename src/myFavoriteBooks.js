import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './myFavoriteBooks.css';
// import { Card } from 'react-bootstrap/Card';
// import { ListGroup } from 'react-bootstrap/ListGroup';
// import { assertExpressionStatement } from '@babel/types';
import ListGroup from 'react-bootstrap/ListGroup'
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Card from 'react-bootstrap/Card'
class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      book:[]
    };
  }
// get the data from the bakeend 
  componentDidMount =async () =>
  {
    const {user} = this.props.auth0;
    const myBooks= `${process.env.REACT_APP_HOST}/books?email=${user.email}`;
    const urlBook= await axios.get(myBooks);
    this.setState({book:urlBook.data});
  }
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
{ this.state.book.map(item =>{
return <Card style={{ width: '18em'}}>
  <ListGroup variant="flush">
    <ListGroup.Item as="li" active>
      book num {item.name}
    </ListGroup.Item>
    description:{item.description}
    <ListGroup.Item>
    </ListGroup.Item>
    Status:{item.status}
    <ListGroup.Item>
    </ListGroup.Item>
  </ListGroup>
</Card>;

})}

      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);