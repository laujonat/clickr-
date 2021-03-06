import React from 'react';
import FeedNav from './feed_nav';
import PhotoIndexContainer from '../photos/photo_index_container';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';
import UploadPhotoContainer from '../photos/upload_photo_container';
import { AuthRoute } from '../../util/route_util';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Panes = [
      {title: 'All Activity', content: <PhotoIndexContainer />},
    ];


    return (
      <React.Fragment>
        <FeedNav panes={Panes}/>
      </React.Fragment>
    );
  }
}

export default Feed;
