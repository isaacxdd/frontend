import {Link} from 'react-router-dom';

// describe the post prop
function Post({ post }) {
    return (
      <div className="border-2 border-gray-400 rounded-md shadow-md mx-auto w-96">
        <Link to={`/post/${post.id}`} className="block p-4">
          <h1 className="text-2xl font-semibold mb-4 text-center">{post.date}</h1>
          <h2 className="text-5xl font-medium mb-4 text-center">{post.country}</h2>
          <h3 className="text-5xl font-normal mb-4 text-center">{post.city}</h3>
          <h4 className="text-4xl font-normal mb-4 text-center">{post.hotel}</h4>
          <img 
            src={post.memory}
            alt={post.memory}
            className="w-full h-256 object-cover rounded-md transition-transform hover:scale-105"
          />
        </Link>
      </div>
    );
  }
export default Post;