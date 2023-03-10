import { useContext, memo } from "react";
import { Context } from "./App";
import { type Album } from "./api/getAlbums";

export function AlbumList() {
    const [ albums ] = useContext(Context);
    return (
        <div className="album-list">
            <div className="album-list-container">
                {albums.length > 0 ? albums.map((album: Album, index: number) => {
                    return (<AlbumCover albumInfo={album} key={index}/>)
                }) : ''}
            </div>
        </div>
        )
}

function AlbumCover(props: any) {
    const { albumInfo } = props;
    return (
        <div className="album-cover" style={{ background: `url(./public/covers/${albumInfo.coverUrl}) rgba(255, 55, 190, 0.9)`, backgroundRepeat: "round" }}>
            <div className="album-info">
                <div className="title">{albumInfo.artist}</div>
                <div className="info">{albumInfo.name}</div>
                <div className="year">{albumInfo.year}</div>
                <div className="more-info">
                    <a target="_blank" href={albumInfo.socials.bandcamp} className="bc-link">Bandcamp</a>
                    <a href={'/'} className="bc-link">Ver Artista</a>
                </div>
            </div>
        </div>)
}

export default memo(AlbumList);