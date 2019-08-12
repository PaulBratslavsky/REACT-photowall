import React, { Component }from 'react';

import propTypes from 'prop-types';

import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { removePostAction, addPostToDatabase, getPostFromDatabase, removePostFromDatabase } from './../Redux/Actions/postActions';
import { addCommentsToDatabase, removeCommentAction } from './../Redux/Actions/commentActions';

// IMPORT COMPONENTS
import Title from './Title';
import PhotoWall from './PhotoWall';
import Single from './Single';
import AddPhoto from './AddPhoto';



class Main extends Component {
  componentDidMount() {
    this.props.getPostFromDatabase();
  }

  render() {

    return (
      <React.Fragment>
        <Title />
        <div>
          <Route exact path='/' render={ () => <PhotoWall {...this.props} /> } />

          <Route path='/addphoto' render= { ({history}) => <AddPhoto {...this.props} history={history} /> } />

          <Route exact path='/single/:id' render={ ({match}) => <Single {...this.props} match={match} /> } />
        </div>
      </React.Fragment>
      
    )
  }
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
export default connect(mapStateToProps, { removePostAction, addPostToDatabase,removePostFromDatabase, addCommentsToDatabase, removeCommentAction, getPostFromDatabase })(Main);


