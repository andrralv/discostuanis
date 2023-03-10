import React, { useEffect, useState } from 'react';
import Modal from "react-modal";
import getArtists from "./api/getArtists";
import getAlbums from "./api/getAlbums";
import Nav from "./Nav";
import x_icon from "./assets/cancel.png";

import './App.scss'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'floralwhite',
        width: '90%',
        height: '100%',
        maxHeight: '80%',
        overflowY: 'scroll'
    },
};

type ContextType = any;
export const Context = React.createContext<ContextType>([]);

function Artistas(props: any) {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalContent, setModalcontent] = useState(<div></div>);

    const [artists, setArtists] = useState({});
    const [albums, setAlbums] = useState({});

    useEffect( () => {
        const getArtistList = async () => {
            return await getArtists();
        };
        getArtistList().then(res => setArtists(res));
        const getAlbumList = async () => {
            return await getAlbums();
        };
        getAlbumList().then(res => setAlbums(res));

    }, [])

    function getTags(tags: string) {
        const tagList = tags.split(";");
        const tagElements = tagList.map((tag: any) => {
            return <div key={tag} className="artist-tag">{tag}</div>
        })
        return tagElements;
    }

    function getLinks(links: string) {
        const linkList = links.split(';');
        const linkElements = linkList.map((link: any) => {
            return <li key={link} className="artist-link"><a target="_blank" href={link}>{link}</a></li>
        })
        return linkElements;
    }

    function getVideos(urls: string) {
        const urlList = urls.split(';');
        const urlElements = urlList.map((url: any) => {
            return <iframe
                key={url}
                width="680"
                height="400"
                src={`https://www.youtube.com/embed/${url}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        })
        return urlElements;
    }

    function getReleases(releases: string) {
        const releaseList = releases.split(';');
        const releaseElements = releaseList.map((release: any) => {
            return Object.values(albums).map((album: any) => {
                if (album.id === release) {
                    return (<div key={album.coverUrl} className="album-cover" style={{ background: `url(/src/public/covers/${album.coverUrl}) rgba(255, 55, 190, 0.9)`, backgroundRepeat: "round" }}></div>)
                }
            })
        })
        return releaseElements;
    }

    function setArtistModal(artist: any) {
        const modal = <div className="artist-modal">
            <div className="close-modal">
                 <img src={x_icon} onClick={() => setIsOpen(false)} />
            </div>
            <div className="artist-info">
                <div className="artist-title-photo">
                    <div className="artist-text">
                        <div className="artist-title">{artist.name}</div>
                        <div className="artist-tags">{getTags(artist.tags)}</div>
                        <div className="artist-bio">{artist.bio}</div>
                        <ul className="artist-links">{getLinks(artist.links)}</ul>
                        <h3 className="artist-subsection-title">Releases</h3>
                        <div className="artist-releases">{getReleases(artist.releases)}</div>
                        <h3 className="artist-subsection-title">Videos Musicales</h3>
                        <div className="artist-videos">{getVideos(artist.videos)}</div>
                    </div>
                    <div className="artist-cover" style={{ background: `url(/src/public/bandimages/${artist.photourl})`, backgroundRepeat: "round" }}></div>
                </div>
            </div>
        </div>
        setModalcontent(modal);
    }

    function navigateArtista(artist: any) {
        history.replaceState("", "", `${window.location.origin}/artista/${artist.name}/`);
        setIsOpen(true);
        setArtistModal(artist);
    }

    return (
        <>
            <Nav />
            <div className="App">
                <Context.Provider value={[ artists, albums ]} >
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setIsOpen(false)}
                        overlayClassName={'general-modal'}
                        // @ts-ignore
                        style={customStyles}
                        contentLabel="Example Modal"
                    >
                        {modalContent}
                    </Modal>
                    <Title />
                    <ul className="artist-list">
                        {Object.values(artists).map((artist: any) => {
                            return <li key={artist.name} onClick={() => navigateArtista(artist)} className="artist-list-element"><a href={'#'}>{artist.name}</a></li>
                        })}
                    </ul>
                    <Footer />
                </Context.Provider>
            </div>
        </>
    )
}

function Title() {
    return (
        <div>
            <h2 className="page-title" style={{ marginTop: '5%' }}>Artistas</h2>
        </div>)
}

function Footer() {
    return (<div className="footer"></div>)
}

export default Artistas
