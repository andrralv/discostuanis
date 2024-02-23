import { useEffect, useState } from 'react';
import getEpks, { EpkType } from './api/getEpks';
import bcc1 from "./assets/bcc1.jpg";

type Props = {
  band: string
}

function Epk(props: Props) {
  const [epk, setEpk] = useState<EpkType>();
  const { band } = props;

  useEffect(() => {
    const _getEpk = async () => { 
      return await getEpks(band);
    };
    _getEpk().then(res => setEpk(res));
  }, [])

  console.log(band);

  if (epk) {
    return (<div className={`epk ${band.toLowerCase()}`}>
      {getTitle(epk.name)}
      {getImg()}
      {getText(Object.values(epk.text))}
      {getLinks(Object.values(epk.links))}
      {getDownloads(Object.values(epk.links))}
    </div>)
  }
  return <div>...</div>
} 

const getTitle = (name: String) => {
  return (
    <div className="band-name">
      {name}
    </div>
    )
}

const getImg = () => {
  return <img className={"epk-img-feature"} src={bcc1} />
};

const getText = (text: Array<String>) => {
  return (
  <div className="band-list-text">
    {text.map((t, i) => {
      return <p key={i}>{t}</p>
    })}
  </div>)
}

const getLinks = (links: Array<String>) => {
  const _links = links.slice(0, 3)
  return (
  <div className="band-list-links">
    <div className="links-title">Links:</div>
    {_links.map((l, i) => {
      return <li key={i} className="link"><a href={l as string}>{l}</a></li>
    })}
  </div>)
}

const getDownloads = (links: Array<String>) => {
  const _downloads = links.slice(3, 6);
  return (<div className="downloads-list">
    <div className="download-link-container"><a href={_downloads[0] as string} download target='_blank'>Descargar EP</a></div>
    <div className="download-link-container"><a href={_downloads[1] as string} download target='_blank'>Descargar este EPK</a></div>
    <div className="download-link-container"><a href={_downloads[2] as string} download target='_blank'>Descargar Media</a></div>
  </div>)
}

export default Epk