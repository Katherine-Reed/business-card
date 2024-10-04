import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const iconE = <FontAwesomeIcon icon={faEnvelope} />
const iconL = <FontAwesomeIcon icon={faLinkedin} />

export default function Buttons() {
    return (
        <section className='card-buttons'>
            <button className='card-btn-email'>
                <a href="mailto:kgreed71@sky.com?subject=Sent%20from%20Digital%20Business%20Card">
                {iconE} Email
                </a>
            </button>
            <button className='card-btn-linkedIn'>
                <a href="https://www.linkedin.com/in/katherine-grace-reed-831a7162/">
                {iconL} LinkedIn
                </a>
            </button>
        </section>
    )
}