import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import gifthree from "./assets/notes3.gif";
import gifone from "./assets/notes1.gif";

Modal.setAppElement('#root');

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxHeight: '80%',
        overflowY: 'scroll'
    },
};
const Nav = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalStyles, setModalStyles] = useState(customStyles);
    const [modalContent, setModalcontent] = useState(<div></div>);
    const navigate = useNavigate();
    function closeModal() {
        setIsOpen(false);
    }

    function openInfoModal() {
        setModalcontent(infoModalContent());
        setIsOpen(true);
    }

    function openContactModal() {
        setModalcontent(contactModalContent());
        setIsOpen(true);
    }

    function infoModalContent() {
        return (
            <div className="modal-info" onClick={closeModal}>
                <p>Discos Tuanis es un sello disquero independiente con sede en San José, Costa Rica, que se ha establecido como uno de los principales sellos de la región en la última década. Fundado en 2010 por un grupo de amigos apasionados por la música, Discos Tuanis se ha centrado en el rock experimental y el jazz lounge como géneros principales, pero también ha apoyado a músicos de otros géneros.</p>
                <p>La primera banda que firmó con Discos Tuanis fue Ceniza, una banda de rock experimental que había estado tocando en la escena local desde finales de los años 90. Su álbum debut "Fuego en la Montaña" fue lanzado en 2011 bajo el sello de Discos Tuanis y recibió una gran cantidad de elogios tanto en Costa Rica como en otros países de América Latina. Desde entonces, Ceniza ha lanzado tres álbumes más con el sello y se ha convertido en una de las bandas más respetadas e influyentes de la escena musical centroamericana.</p>
                <p>Otra de las bandas importantes de Discos Tuanis es Vicepresidente, una banda de jazz lounge liderada por la talentosa vocalista Sofía Ramírez. Su álbum debut homónimo fue lanzado en 2013 y recibió críticas muy positivas, especialmente por la voz de Ramírez y las habilidades de improvisación de los músicos de la banda. Desde entonces, Vicepresidente ha lanzado dos álbumes más con el sello y ha realizado giras por varios países de América Latina y Europa.</p>
                <p>Pero Discos Tuanis no se trata solo de lanzar discos, sino también de apoyar a la escena musical local a través de eventos en vivo. Cada año, Discos Tuanis organiza un festival dedicado exclusivamente a las bandas que pertenecen al sello, llamado "Tuanis Fest". El festival se ha convertido en uno de los eventos más esperados del año en San José, y ha presentado a algunas de las mejores bandas de la escena local y de otros países de América Latina.</p>
                <p>A lo largo de los años, Discos Tuanis ha logrado establecer una sólida reputación como un sello disquero independiente de alta calidad, tanto en Costa Rica como en otros países de la región. Su enfoque en el rock experimental y el jazz lounge, así como su compromiso con la escena musical local, han ayudado a crear una comunidad musical vibrante y diversa en San José y más allá.</p>
                <div className="info-gif">
                    <img src={gifthree} />
                </div>
            </div>
        )
    }

    function contactModalContent() {
        return (<div className="modal-contact" onClick={closeModal}>
            <p>Los usuarios pueden enviar preguntas, sugerencias y solicitudes a través del correo electrónico <span style={{ fontWeight: '600' }}>discostuanis@gmail.com</span>. En este correo, los usuarios pueden preguntar acerca de merchandising 👗👘, conciertos 🎸,  y discos 📀 de las bandas que forman parte del sello, lo que les permite estar al tanto de las últimas noticias y eventos relacionados con la música que les gusta.</p>
            <div className="contact-gif">
                <img src={gifone} />
            </div>
        </div>);
    }

    function goHome() {
        navigate("/");
    }

    function goArtists() {
        navigate("/artistas");
    }

    return <div className="nav">
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            overlayClassName={'general-modal'}
            style={modalStyles}
            contentLabel="Example Modal"
        >
            {modalContent}
        </Modal>
            <ul>
                <li onClick={goArtists}>Artistas</li>
                <li onClick={openInfoModal}>Info</li>
                <li onClick={openContactModal}>Contacto</li>
                <li onClick={goHome}>🏠</li>
            </ul>
    </div>
}

export default Nav;

