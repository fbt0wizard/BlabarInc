import React from 'react';
import "./postDetails.css";
import { Back } from "../../component/back/Back";
import { PostInput } from '../../component/post-input/PostInput';


export const PostDetails = () => {
  return (
    <div>
        <Back />
        <h2 className='head-tittle'>New text drag</h2>
        <div className="post-input">
          <PostInput count={'32/50'} ph={'e.g who is the strongest avenger'} tittle={'Ask a question'}/>
          <PostInput count={'32/32'} ph={'e.g thor'} tittle={'Option 1'}/>
          <PostInput count={'32/32'} ph={'e.g Hulk'} tittle={'Option 2'}/>
        </div>
        <div className="add-more">
          <button>Add a new option</button>
        </div>
        <div className="post-button">
          <button>Post</button>
        </div>
    </div>
  )
}
