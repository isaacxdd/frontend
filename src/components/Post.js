import {Link} from 'react-router-dom';

// describe the post prop
function Post ({post}){

    const got = {
        textAlign: 'center',
        border: `3px solid`,
        margin: "10px auto",
        width: "80%",
    }

    return <div style={got}>
        <Link to={`/post/${post.id}`}>
            <h1>{post.date}</h1>
            <h2>{post.country}</h2>
            <h3>{post.city}</h3>
            <h4>{post.hotel}</h4>
            <img src={post.memory} alt={post.memory}/>
        </Link>
    </div>
}

export default Post;