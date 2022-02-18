import React from 'react';
import "./imagePost.css"
import { Back } from "../../component/back/Back";
import { PostInput } from '../../component/post-input/PostInput';
import PanoramaIcon from '@mui/icons-material/Panorama';

export const ImagePost = () => {
  return (
    <div>
        <Back />
        <h1 className='head-tittle'>New image drag</h1>
        <div className="drag-input">
            <PostInput count={'32/50'} ph={'who should eleven end up with'} tittle={'Ask s question'} />
        </div>
        <div className="add-images">
            <label htmlFor="addImg"><PanoramaIcon className='add-img-icon' /> Add images</label>
            <input type="file" name="images" id='addImg' accept='image/*' multiple/>
        </div>
        <div className="guide">
            <p>(You can add up to four Photos)</p>
        </div>
    </div>
  )
}
