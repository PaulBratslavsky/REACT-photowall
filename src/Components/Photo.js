import React from 'react'

const Photo = (props) => {
  const { post } = props;

  console.log(post);

  const { handleRemovePhoto } = props;

  return (
    <figure className='figure'>
      <img className='photo' src={post.imageLink} alt={post.description}/>
      <figcaption><p>{post.description}</p></figcaption>
      <div className='button-container'>
        <button onClick={ () => handleRemovePhoto(post.id) } className='remove-button'>Remove</button>
      </div>
      
    </figure>
  )
}

export default Photo
