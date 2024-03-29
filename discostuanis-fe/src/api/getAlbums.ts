import albumsFile from '../../../discos.json';

export type Album = {
    name: string,
    artist: string,
    year: number,
    info: string,
    coverUrl: string,
    links?: string;
    socials?: Object;
    numero: number;
}

const BANDCAMP = 'bandcamp';

const apiKey = 'AIzaSyAtvginyrYJDC705m-9aHEt8l75hJMXlKM';
const fileId = '1FcI55MwnSmNQl0bfMYaaVoyCjSYQevoc';
const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${apiKey}`;
export default async function getAlbums() {
    let albums: Array<Album>;
    // try {
    //     const response = await fetch(url);
    //     albums = await response.json();
    // } catch (e) {
    //     console.log('oops');
    //     albums = albumsFile;
    // }
    // @ts-ignore
    albums = albumsFile;
    for (let i of Object.values(albums)) {
        const socials = {};
        const linkArray = i.links ? i.links.split(';') : []; // ts-ignore
        for (let j of linkArray) {
            if (j.includes(BANDCAMP)) {
                // @ts-ignore
                socials[BANDCAMP] = j;
            }
        }
        i.socials = socials;
    }
    const sortedAlbums = Object.values(albums).sort(
        (objA, objB) => Number(objB.year) - Number(objA.year),
    );
    return sortedAlbums;
}