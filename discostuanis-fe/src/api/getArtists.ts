import artistsFile from '../../../artistas.json';

export type Artist = {
    name: string,
    releases: string,
    videos: string,
    bio: string,
    photourl: string,
    links?: string | Object
}

const apiKey = 'AIzaSyAtvginyrYJDC705m-9aHEt8l75hJMXlKM';
const fileId = '1U6gmigiV3AvxOffwYdAzc4W0ppnupb6P';
const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
export default async function getArtists() {
    let artists: Array<Artist>;
    // try {
    //     const response = await fetch(url);
    //     artists = await response.json();
    // } catch (e) {
    //     artists = artistsFile;
    // }
    artists = artistsFile;

    return artists;
}