import CircleBorder from "./assets/circle-border.png";
import CircleImg from "./assets/circle-work.png";
import {PointIcon} from "./assets/svg-point.jsx";
import {PhoneIcon} from "./assets/svg-phone.jsx";
import {SvgBlob1} from "./assets/svg-blob-1.jsx";
import {SvgBlob2} from "./assets/svg-blob-2.jsx";

function App() {
    return (
    <>
        <nav>
            <div className='container nav-inner'>
                <h3 className='nav-title'>Работа-Сейчас</h3>
                <div className='nav-list'>
                    <div className='merger'>
                        <PointIcon/>
                        <p>г. Волгоград, ул. 7-й Гвардейской, 7</p>
                    </div>
                    <div className='merger'>
                        <PhoneIcon/>
                        <p>+7 900 123 456</p>
                    </div>
                </div>
            </div>
        </nav>
        <section id='section-1'>
            <div className='blob-svg'>
                <SvgBlob1/>
            </div>
            <div className='blob-svg' style={{right: 0, top: '25rem'}}>
                <SvgBlob2/>
            </div>
            <div className='container section-flexbox'>
                <div className='section-content'>
                    <h1>Работа - есть!</h1>
                    <p>
                        Работа-Сейчас — это умный подбор вакансий, который экономит ваше время.
                        Мы соединяем вас с лучшими работодателями, предлагая только релевантные
                        предложения, которые соответствуют вашим целям и опыту. Начните путь к
                        новой карьере прямо сейчас!
                    </p>
                    <button>Найти работу</button>
                </div>
                <div style={{position: 'relative'}}>
                    <img className='circle-border' src={CircleBorder} alt=""/>
                    <img className='circle-image' src={CircleImg} alt=""/>
                </div>
            </div>
        </section>
    </>
    )
}

export default App
