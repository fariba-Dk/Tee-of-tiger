import React from 'react'

const AddPost = () => {

  return(
    <div className="mb-4">

      <form action="">
        <div className="form-rows">
          <div className="col">
            <input
              type="text"
              placeholder="topic"
              className="form-control"/>
          </div>

          <div className="col">
            <input
              type="text"
              placeholder="author"
              className="form-control"/>
          </div>

          <div className="col">
            <select className="custom-select my-1 mr-sm-2">
              <option disables>About</option>
              <option value="1">Golf Courses</option>
              <option value="2">Active Bloggers</option>
              <option value="1">Posts</option>
            </select>
          </div>
          <button className="btn btn-primary">Select</button>

        </div>
      </form>
  </div>
  )
}
export default AddPost
