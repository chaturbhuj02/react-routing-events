import { Link, json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";
export default function EventDetailPage(){
    const data = useLoaderData();
    
    return(<>
        <EventItem event={data.event} />
        <Link to=".." relative="path">Go back</Link>
    </>)
}

export async function loader({request, params}){
    const id = params.id;
    const response = await fetch('http://localhost:8080/events/' + id); 
    if(!response.ok){
        throw json({message: "could not fetch details for selected event"},{
            status: 500
        })
    } else{
        return response;
    }
    
}