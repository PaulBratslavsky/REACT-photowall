import React from 'react';

import propTypes from 'prop-types';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePostAction, addPostAction } from './../Redux/Actions/postActions';
import { addCommentAction, removeCommentAction } from './../Redux/Actions/commentActions';

// IMPORT COMPONENTS
import Title from './Title';
import PhotoWall from './PhotoWall';
import Single from './Single';
import AddPhoto from './AddPhoto';



const Main = (props) =>  {
    return (
      <React.Fragment>
        <Title />
        <div>
          <Route exact path='/' render={ () => <PhotoWall {...props} /> } />

          <Route path='/addphoto' render= { ({history}) => <AddPhoto {...props} history={history} /> } />

          <Route exact path='/single/:id' render={ ({match}) => <Single {...props} match={match} /> } />
        </div>
      </React.Fragment>
      
    )
  
}

PhotoWall.propTypes = {
  posts: propTypes.array.isRequired,
}

const mapStateToProps = (state) => {
  console.log(state, 'from stat to props');
  return { 
    posts: state.posts,
    comments: state.comments
  }
}
export default connect(mapStateToProps, { removePostAction, addPostAction, addCommentAction, removeCommentAction })(Main);


