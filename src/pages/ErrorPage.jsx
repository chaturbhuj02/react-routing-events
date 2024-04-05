import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent.jsx";

export default function ErrorPage(){
    const error = useRouteError();

    let title='The link you trying to visit seems broken!!!';
    let message = 'Double check your link again........';
    
    if(error.status === 500){
        message = error.data.message;
    }

    if(error.status === 404){
        title = 'Not found!';
        message = 'Could not find resource or page';
    }

    return(<>
        <MainNavigation />
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
        
    </>)
}