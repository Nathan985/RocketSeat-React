import React from 'react'
import './styles.css'
import image from '../../img/default.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faArchive, faEnvelope, faUserEdit} from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => (
    <div className="container">
        <div className="sidebar-container" >
            <div className="container-info" >
                <img width="160px" className="image" height="160px" src={image} />
                <p>Nathan Rodrigues</p>
            </div>
            <div className="sidebar-item">
                <FontAwesomeIcon icon={faHome} /><b>Home</b>
            </div>
            <div className="sidebar-item">
                <FontAwesomeIcon icon={faArchive} /><b>Produtos</b>
            </div>
            <div className="sidebar-item">
                <FontAwesomeIcon icon={faEnvelope} /><b>Mensagens</b>
            </div>
            <div className="sidebar-item">
                <FontAwesomeIcon icon={faUserEdit} /><b>Perfil</b>
            </div>
        </div>
    </div>
)

export default Sidebar