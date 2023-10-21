import {useLoaderData } from "react-router-dom";
import Post from "../components/Post";
import Nav from "../components/Navbar";
import Hero from "../components/Hero";
import Forms from "../components/Form";
import Carousel from "../components/carousel";



function Index (props){

   const albums = useLoaderData()
   const albumsArray = albums.map((album) => album.memory);

    return<>
        <Nav/>
        <Hero/>
        <Carousel albums={albumsArray} />
        <Forms className="indexFormAll"/>           
        <h1 className="itemList marquee">All Albums</h1>
        <div className='bijay'>
     {albums.map((album) => <Post key={album.id} post={album}/>)} 
     </div>   
</>
}

export default Index;



// function Index (props){

//     // fetch the loaderdata using the useLoaderData hook
//     const albums = useLoaderData()

//     // map over the albums and create a Post component for each album
//     return <>
//     <div className='logo'>
//       <h1>Welcome to your Album</h1> 
//         <img src='https://i.etsystatic.com/13074475/r/il/2ca25e/3729652924/il_fullxfull.3729652924_e6nc.jpg' alt="main"/>
//     </div>
//     <div className="content-container">
//         <div className="albumForm">
//           <div className="createalbum">
//           <div className="newAlbum"><h2>Create a new Album </h2> </div>
//             <Form action="/create" method="post">
//               <fieldset className="album-info">
//                 <label>Date</label> 
//                 <input type="text" name="date" placeholder="Enter your date"/>
//                 <label>Country</label>  
//                 <input type="text" name="country" placeholder="Enter the country"/>
//                 <label>City</label>  
//                 <input type="text" name="city" placeholder="Enter the city"/>
//                 <label>Hotel</label>  
//                 <input type="text" name="hotel" placeholder="Enter the hotel"/>       
//                 <label>Poster</label>  
//                 <input type="text" name="memory" placeholder="Please provide the picture"/>       
//               </fieldset>
//               <input type="submit" value="Create a new Album"/>
//             </Form>
//           </div>
//         </div>   
//         </div>  
//  <div className='bijay'>
//     {albums.map((album) => <Post key={album.id} post={album}/>)} 
//     </div>       
//     </>
// }

// export default Index;