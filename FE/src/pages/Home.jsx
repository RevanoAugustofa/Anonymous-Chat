import * as React from 'react'
import { Link } from 'react-router-dom';
const Home = () => {
    return ( 
        <div className="bg-white text-black">
            halo
            <Link to='/settings'>setting</Link>
        </div>
     );
}
 
export default Home;