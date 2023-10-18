import url from "./url"
import { redirect } from "react-router-dom";

// Create Action for Creating Cars
export const createAction = async({request}) => {
    // parse out the form data
    const formData = await request.formData();

    // construct the body for our api call
    const newAlbum = {
        date: formData.get("date"),
        country: formData.get("country"),
        city: formData.get("city"),
        hotel: formData.get("hotel"),
        memory: formData.get("memory")
    }

    // make a request to create a car
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newAlbum)
    })

    // redirect to the index page
    return redirect("/")
}

// Update Action for Updating Cars
export const updateAction = async({request, params}) => {
    // get the id from params
    const id = params.id
    // parse out the form data
    const formData = await request.formData();
    // construct the updated car
    const updatedAlbum = {
        date: formData.get("date"),
        country: formData.get("country"),
        city: formData.get("city"),
        hotel: formData.get("hotel"),
        memory: formData.get("memory")
    }


    // make a request to update a car
    await fetch(url + id, {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedAlbum)
    })

    // redirect to the show page
    return redirect("/")
}

// Delete Action for Deleting Cars
export const deleteAction = async({params}) => {
    // get the id from params
    const id = params.id

    // make a request to delete a car
    await fetch(url + id, {
        method: "delete"
    })

    // redirect to the index page
    return redirect("/")
}