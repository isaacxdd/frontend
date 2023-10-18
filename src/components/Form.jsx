import {Link} from "react-router-dom";
import { useLoaderData, Form } from "react-router-dom";

function Forms (props){
    return(
        <div className="addShopping">
            <div className="px-1.5 formItem">
                <h2>Post Item</h2>
                <Form method="post" action="/create">
                    <div className="createInput">
                        <input className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm"type="text" name="date" placeholder="Enter your date"/><br/>
                        <input className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="country" placeholder="Enter the country" step="0.01"/><br/>
                        <input className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="city" placeholder="Enter the city"/><br/>
                        <input className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="hotel" placeholder="Enter the hotel"/><br/>
                        <input className="inputFields w-full block rounded-md border-0 py-1.47 px-1.5 text-gray-900 shadow-sm" type="text" name="memory" placeholder="Please provide the picture"/><br/>
                    </div>
                    <div className="buttonMain flex justify-center">
                        <button className="buttonAdd w-full py-1 rounded-md mx-1.5  mb-5 bg-green-900 hover:bg-green-600 transform scale-105 transition-transform duration-300">Add Item</button>
                    </div>
               
                </Form>
            </div>
        </div>
    )
}
export default Forms