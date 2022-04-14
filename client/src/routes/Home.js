import React from 'react'
import Header from '../components/Header';
import AddPost from '../components/AddPost'
import PostsList from '../components/PostsList'
import NavBar from '../components/Nav'



const Home = () => {

  return(

    <div>
      <NavBar/>
      <Header/>

      <PostsList/>

      <AddPost/>


    </div>
  )
}
export default Home
