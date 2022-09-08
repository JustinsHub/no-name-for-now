import { FC } from 'react'
import Home from '../home-page/Home'
import Footer from './Footer'
import Navbar from './Navbar'

const Main: FC = () => {
    //TODO: 
    //Get an anime API and test requests
    //Orgranize/structure api static classes?
    //Render API (test it out) and render it on the correct component
    /*Routes 
        -> navigate to correct anime component
        -> render anime api object on specific component (check how many requests you can have and if there's any test ones)
        
    */

    /* State management (useContext and useReducer)
        -> pagnation of anime using api pagnation (if no pagnation api then find optimal solution for pagnation)
        -> create input for filtering (input should render/autocomplete when typing? Show anime. Should have loader when searching the API)
    */

    /* 
    Application obstacle: 
    -> home-page components may have multiple requests. One component that has many child components (which has api requests as well). Example: Home component may be populated by Trending/MostPopular components. Will this take a toll on limited requests? 
    -> What happens if the limit of requests have exceeded? Create a conditional that backs up the render of the anime api OR give a warning/error?
    */


    return (
        <section>
            <Navbar/>
            <Home/>
            <Footer/>
        </section>
    )
}

export default Main