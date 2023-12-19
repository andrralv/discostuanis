import epksFile from '../../../epks.json';

export type EpkType = {
    name: string,
    text: Object,
    links: Object
}

export default function getEpks(name: String) {
    // try {
    //     const response = await fetch(url);
    //     artists = await response.json();
    // } catch (e) {
    //     artists = artistsFile;
    // }
    // @ts-ignore
    // epks = JSON.parse(epksFile);
    const epk = Object.values(epksFile).find(b => b.name === name);
    return epk;
}