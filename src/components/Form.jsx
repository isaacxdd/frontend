
import {Form } from "react-router-dom";

function Forms(props) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-green-400">
      <div className="w-2/4 h-2/4 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Post Album</h2>
        <Form action="/create" method="post">
            <div className="mb-4">
              <input
                className="inputFields"
                type="text"
                name="date"
                placeholder="Date"
              />
            </div>
            <div className="mb-6">
              <input
                className="inputFields"
                type="text"
                name="country"
                placeholder="Country"
              />
            </div>
            <div className="mb-6">
              <input
                className="inputFields"
                type="text"
                name="city"
                placeholder="City"
              />
            </div>
            <div className="mb-6">
              <input
                className="inputFields"
                type="text"
                name="hotel"
                placeholder="Hotel"
              />
            </div>
            <div className="mb-4">
              <input
                className="inputFields"
                type="text"
                name="memory"
                placeholder="Favorite Memory"
              />
            </div>
            <div className="flex justify-center">
              <button className="buttonAdd w-full py-2 rounded bg-green-500 hover:bg-green-600 transform scale-105 transition-transform duration-300 text-white">
                Add Item
              </button>
            </div>
          </Form>
        </div>
      </div>
    );
  }
  
export default Forms