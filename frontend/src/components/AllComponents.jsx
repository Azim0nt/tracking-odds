import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './Home';
import Navigation from './Navigation';
import AllMatches from './AllMatches';
import CS2 from './CS2';
import Lol from './Lol';
import Dota from './Dota'
import Ml from './Ml';
import NoPage from './NoPage';
function AllComponents() {
    const location = useLocation()
    return ( 
        <>
        <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
           <Route path='/all' element={<AllMatches/>}/>
           <Route path='/cs' element={<CS2/>}/>
           <Route path='/dota' element={<Dota/>}/>
           <Route path='/lol' element={<Lol/>}/>
           <Route path='/ml' element={<Ml/>}/>
           <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
        </>
     );
}

export default AllComponents;