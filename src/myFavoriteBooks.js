import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './myFavoriteBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';


import BestBooks from './BestBooks';
class MyFavoriteBooks extends React.Component {
    constructor(props){
        super(props)
        this.state={
          booksArr:[],
          showbooksAfterAdd:false,
        }
      }

  componentDidMount =async () =>
  {
    const {user} = this.props.auth0;
    const myBooks= `${process.env.REACT_APP_HOST}/book?email=${user.email}`;
    console.log(myBooks);
    const urlBook= await axios.get(myBooks);
    this.setState({book:urlBook.data});
  }
  addBookHandler=async(event)=>{
    event.preventDefault();
 
   const  addBook={
      bookName:event.target.bookName.value,
      description:event.target.bookDesc.value,
      status:event.target.bookStatus.value,
      email : this.props.auth0.user.email,
    }
  
      const addedBook = await axios.post(`${process.env.REACT_APP_URL}/books`,addBook)
  
      this.setState({
        booksArr:addedBook.data,
      })
  }


  deleteCardHandler= async (index)=>{
    const email= {email:this.props.auth0.email}
    let id = this.state.booksArr[index]._id;
    try{
    let newBookArr= await axios.delete(`${process.env.REACT_APP_URL}/books/${id}`,{params:email})

    this.setState({
      booksArr:newBookArr.data 
    })
    }
    catch{
      // console.log(newBookArr)
      console.log('error in delete books')
    }
  }

  render() {
    return(
     
     

    
      <BestBooks 
      deleteCardHandler={this.deleteCardHandler}
      booksArr={this.state.booksArr}
      addBookHandler={this.addBookHandler}
      showbooksAfterAdd={this.state.showbooksAfterAdd}
      />


    )
  }
}

export default withAuth0(MyFavoriteBooks);