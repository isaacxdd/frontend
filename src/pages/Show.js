import { Link, useLoaderData, Form } from "react-router-dom";

function Show(props) {
  const post = useLoaderData();

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-200 to-blue-300">
      <div className="w-96 p-6 bg-white rounded-md shadow-md space-y-4">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-800">{post.date}</h1>
          <h3 className="text-lg text-gray-600">{post.country}</h3>
          <h3 className="text-lg text-gray-600">{post.city}</h3>
          <h3 className="text-lg text-gray-600">{post.hotel}</h3>
        </div>
        <img className="w-full h-64 object-cover rounded-md" src={post.memory} alt={post.date} />
        
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800">Update {post.date}</h2>
          <Form action={`/update/${post.id}`} method="post">
            <input type="text" name="date" placeholder="Car's brands" defaultValue={post.date} />
            <input type="text" name="country" placeholder="Car's model" defaultValue={post.country} />
            <input type="text" name="city" placeholder="Car's year" defaultValue={post.city} />
            <input type="text" name="hotel" placeholder="Car's price" defaultValue={post.hotel} />
            <input type="text" name="memory" placeholder="Movie's Poster" defaultValue={post.memory} />
            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4">Update Album</button>
          </Form>
        </div>

        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-800">Delete This Car</h2>
          <Form action={`/delete/${post.id}`} method="post">
            <button className="bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4">Delete Album</button>
          </Form>
        </div>

        <div className="text-center">
          <Link to="/" className="text-blue-500 hover:underline">Back to Index</Link>
        </div>
      </div>
    </div>
  );
}

export default Show;