import React, { useEffect, useState } from 'react';
import getAlbums from "./api/getAlbums";
import Nav from "./Nav";
import AlbumList from "./AlbumList";
import LandingImage from "../public/dqsp22.png";
import LighterSound from "../public/lighter.mp3";
import giftwo from "./assets/notes2.gif";

import './App.scss'

type ContextType = any;
export const Context = React.createContext<ContextType>([]);

function App() {
    const [albums, setAlbums] = useState({});
    useEffect( () => {
        const getAlbumList = async () => {
            return await getAlbums();
        };
        getAlbumList().then(res => setAlbums(res));

    }, [])
    return (
        <>
        <Nav />
            <div className="App">
                <Context.Provider value={[ albums ]} >
                    <Landing />
                    <Title />
                    <AlbumList />
                    <Footer />
                </Context.Provider>
            </div>
        </>
  )
}

function Landing() {
    const [counter, setCounter] = useState(0);
    const [isOn, setIsOn] = useState('off');
    async function turnOn() {
        await setCounter(counter+1);
        if (counter === 6 || counter === 9) {
            setIsOn('on')
        }
    }
    function playSound() {
        new Audio(LighterSound).play();
        turnOn();
    }
    if (counter > 7) {
        return (
            <div className={`landing-image-${isOn}`} onClick={playSound}>
                <span className="gif-container"><img className="gif-image" src={giftwo}/></span>
                <img src={LandingImage}/>
            </div>
        )
    }
    return (
        <div className={`landing-image-${isOn}`} onClick={playSound}>
            <img src={LandingImage}/>
        </div>
    )
}

function Title() {
    return (
        <div>
            <h2 className="page-title">Discos Tuanis</h2>
        </div>)
}

function Footer() {
    return (<div className="footer"></div>)
}

export default App
