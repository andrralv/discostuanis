import { useEffect, useState } from 'react';
import getEpks, { EpkType } from './api/getEpks';
import bcc1 from "./assets/bcc1.jpg";

const BAND_NAME = "Buen Camino";

function Epk() {
  const [epk, setEpk] = useState<EpkType>();

  useEffect(() => {
    const _getEpk = async () => { 
      return await getEpks(BAND_NAME);
    };
    _getEpk().then(res => setEpk(res));
  }, [])

  if (epk) {
    return (<div className="epk">
      {getTitle(epk.name)}
      {getImg()}
      {getText(Object.values(epk.text))}
      {getLinks(Object.values(epk.links))}
      {getDownloads()}
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
    {text.map(t => {
      return <p>{t}</p>
    })}
  </div>)
}

const getLinks = (links: Array<String>) => {
  return (
  <div className="band-list-links">
    <div className="links-title">Links:</div>
    {links.map((l) => {
      return <li className="link"><a href={l as string}>{l}</a></li>
    })}
  </div>)
}

const getDownloads = () => {
  return (<div className="downloads-list">
    <div><a href={'https://drive.google.com/file/d/1Fy9quyo96-OqPAds5gR7vJrKu0k29IMh/view?usp=sharing'} download>Descargar EP.zip</a></div>
    <div><a href={'https://drive.google.com/file/d/1x0MrHGxku0adqcPdQ1SHkspd73mhyb3q/view?usp=sharing'} download>Descargar este EPK</a></div>
    <div><a href={'https://drive.google.com/file/d/1gQAZsnRJfrQ1kB9kITQdyG3XH8BUCaYH/view?usp=sharing'} download>Descargar Fotos.zip</a></div>
  </div>)
}

export default Epk