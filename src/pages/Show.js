import { Link, useLoaderData, Form } from "react-router-dom";


function Show(props) {
  const post = useLoaderData();

  return (
<div className="album-show">

<div className="car-desc">
  <h1 className="car-brands">{post.date}</h1>
  <h3 className="car-model">{post.country}</h3>
  <h3 className="car-year">{post.city}</h3>
  <h3 className="car-price">{post.hotel}</h3>
  <img className="car-poster-show" src={post.memory} alt={post.date} />
</div>



<div className="car-update">
<h2 className="car-update-show"> Update {post.date}</h2>
<Form action={`/update/${post.id}`} method="post">
    <input type="text" name="date" placeholder="Car's brands" defaultValue={post.date}/>
    <input type="text" name="country" placeholder="Car's model" defaultValue={post.country}/>
    <input type="text" name="city" placeholder="Car's year" defaultValue={post.city}/>
    <input type="text" name="hotel" placeholder="Car's price" defaultValue={post.hotel}/>
    <input type="text" name="memory" placeholder="Movie's Poster" defaultValue={post.memory}/>
    <button>Update Album</button>
</Form>
</div>

<div className="car-delete">
<h2 className="car-delete-show">Delete This Car</h2>
<Form action={`/delete/${post.id}`} method="post">
<button>Delete Album</button>
</Form>
</div>

<div> <Link to="/">Back to Index</Link> </div>

</div>
);
}

export default Show;