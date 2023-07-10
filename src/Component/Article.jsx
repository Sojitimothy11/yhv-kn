import React from 'react'
import data from './data'
import { useParams,Link} from 'react-router-dom'
import './article.css'


const Article = () => {
  const {title}=useParams()
   const allPost=data.find( (blog) =>blog.title===title)
  return (
    <div>
<div className="body">
      
      <img src={allPost.urlToImage} alt="" />
    </div>
    <div className="infomation">
      <p className="title">{allPost.title}</p>
      <p className="description">{allPost.description}</p>
      <p className='content'>{allPost.content}</p>
    </div>
    <div>
     <h6><Link to={`/.`}>Back</Link></h6> 
      </div>

    </div>
  )
}

export default Article


