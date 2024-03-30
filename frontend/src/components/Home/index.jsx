import { NavLink } from "react-router-dom";
import './style.scss'
function Home() {
    return (
        <>
            <div className="home-wrapper">
            
                <h1>
                    Your primary <br />
                    betting assistant
                </h1>
                <p>
                    Site provides data on cyber sports odds changes, <br />
                    forks, pings and more. <b>gl hf!</b>
                </p>
                <div className="table">
                    <NavLink to={'/all'}>All Mathces</NavLink>
                    <NavLink to={'/cs'}>Counter Strike 2</NavLink>
                    <NavLink to={'/dota'}>Dota 2</NavLink>
                    <NavLink to={'/lol'}>League of Legends</NavLink>
                    <NavLink to={'/ml'}>Mobile Legends</NavLink>
                </div>
            </div>
        </>
    );
}

export default Home;