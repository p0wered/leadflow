import {Spiral as Hamburger} from 'hamburger-react'
import CircleBorder from "./assets/circle-border.png";
import CircleImg from "./assets/circle-work.png";
import AbstractImg from "./assets/abstract.png";
import BurgerKing from './assets/bk.png';
import Ozon from './assets/ozon.png';
import Samokat from './assets/samokat.png';
import Bg1 from './assets/bg-1.png';
import Bg2 from './assets/bg-2.png';
import Bg3 from './assets/bg-3.svg';
import Avatar1 from './assets/avatar-1.jpg';
import Avatar2 from './assets/avatar-2.jpg';
import Avatar3 from './assets/avatar-3.jpg';
import Map from './assets/map.png';
import Facebook from './assets/facebook.png';
import Instagram from './assets/insta.png';
import Youtube from './assets/yt.png';
import Twitter from './assets/twitter.png';
import {PointIcon} from "./assets/svg-point.jsx";
import {PhoneIcon} from "./assets/svg-phone.jsx";
import {SvgBlob1} from "./assets/svg-blob-1.jsx";
import {SvgBlob2} from "./assets/svg-blob-2.jsx";
import {useEffect, useState} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {SvgArrow} from "./assets/svg-arrow.jsx";
import {MailIcon} from "./assets/svg-mail.jsx";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        lastName: '',
        firstName: '',
        middleName: '',
        birthDate: '',
    });
    const [isChecked, setIsChecked] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleBirthDateChange = (e) => {
        const { value } = e.target;
        const numbersOnly = value.replace(/\D/g, '');
        let formattedDate = '';

        if (numbersOnly.length > 0) {
            formattedDate += numbersOnly.substr(0, 2);
            if (numbersOnly.length > 2) {
                formattedDate += '.' + numbersOnly.substr(2, 2);
                if (numbersOnly.length > 4) {
                    formattedDate += '.' + numbersOnly.substr(4, 4);
                }
            }
        }

        setFormData({ ...formData, birthDate: formattedDate });
    };

    const handleCheckboxChange = (e) => {
        setIsChecked(e.target.checked);
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.lastName) newErrors.lastName = 'Введите фамилию';
        if (!formData.firstName) newErrors.firstName = 'Введите имя';
        if (!formData.middleName) newErrors.middleName = 'Введите отчество';
        if (!formData.birthDate) newErrors.birthDate = 'Введите дату рождения';
        if (!isChecked) newErrors.checkbox = 'Необходимо согласие на обработку данных';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // здесь код для отправки данных
            console.log('Форма отправлена', formData);
        } else {
            console.log('Форма содержит ошибки');
        }
    };

    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            <div>
                <p style={{marginBottom: '1rem', textAlign: 'center'}}>Начните сейчас</p>
                <div className='title'>
                    <div className='decor' style={{borderRadius: '12px 0 0 12px'}}/>
                    <h2>Подайте заявку</h2>
                    <div className='decor' style={{borderRadius: '0 12px 12px 0'}}/>
                </div>
            </div>
            {errors.lastName && <span className="error">{errors.lastName}</span>}
            <input
                className='form-input'
                type="text"
                name="lastName"
                placeholder='Фамилия'
                value={formData.lastName}
                onChange={handleInputChange}
                data-aos='fade-in'
                data-aos-duration="600"
            />
            {errors.firstName && <span className="error">{errors.firstName}</span>}
            <input
                className='form-input'
                type="text"
                name="firstName"
                placeholder='Имя'
                value={formData.firstName}
                onChange={handleInputChange}
                data-aos='fade-in'
                data-aos-duration="600"
            />
            {errors.middleName && <span className="error">{errors.middleName}</span>}
            <input
                className='form-input'
                type="text"
                name="middleName"
                placeholder='Отчество'
                value={formData.middleName}
                onChange={handleInputChange}
                data-aos='fade-in'
                data-aos-duration="600"
            />
            {errors.birthDate && <span className="error">{errors.birthDate}</span>}
            <input
                className='form-input'
                type="text"
                name="birthDate"
                placeholder='Дата рождения'
                value={formData.birthDate}
                onChange={handleBirthDateChange}
                maxLength="10"
                data-aos='fade-in'
                data-aos-duration="600"
            />
            <div className='merger' style={{marginBottom: '1.325rem'}} data-aos='fade-in' data-aos-duration="600">
                <div className="checkbox-wrapper">
                            <span className="checkbox">
                            <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <svg>
                              <use xlinkHref="#checkbox" className="checkbox"></use>
                            </svg>
                            </span>
                    <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
                        <symbol id="checkbox" viewBox="0 0 22 22">
                            <path fill="none" stroke="white"
                                  d="M5.5,11.3L9,14.8L20.2,3.3l0,0c-0.5-1-1.5-1.8-2.7-1.8h-13c-1.7,0-3,1.3-3,3v13c0,1.7,1.3,3,3,3h13 c1.7,0,3-1.3,3-3v-13c0-0.4-0.1-0.8-0.3-1.2"/>
                        </symbol>
                    </svg>
                </div>
                <p className='checkbox-text'>Я согласен на обработку персональных данных</p>
            </div>
            {errors.checkbox && <span className="error" style={{textAlign: 'center', marginBottom: '16px'}}>{errors.checkbox}</span>}
            <div data-aos='fade-in' data-aos-duration="600" style={{width: '100%', maxWidth: 500}}>
                <button className='work-btn' type="submit">Найти работу</button>
            </div>
        </form>
    );
};

function NextArrow(props) {
    // eslint-disable-next-line react/prop-types
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "white",
                boxShadow: '0 0 10px #00000045',
                borderRadius: '100%',
                width: 30, height: 30,
            }}
            onClick={onClick}
        >
            <div style={{position: 'relative', left: 11, top: -14}}>
                <SvgArrow color='gray'/>
            </div>
        </div>
    );
}

function PrevArrow(props) {
    // eslint-disable-next-line react/prop-types
    const {className, style, onClick} = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                background: "white",
                boxShadow: '0 0 10px #00000045',
                borderRadius: '100%',
                width: 30, height: 30
            }}
            onClick={onClick}
        >
            <div style={{position: 'relative', left: -11, top: -14, transform: 'rotate(-180deg)'}}>
                <SvgArrow color='gray'/>
            </div>
        </div>
    );
}

function FeedbackCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ],
        appendDots: dots => (
            <div>
                <ul style={{margin: "0px", padding: '0px'}}>{dots}</ul>
            </div>
        ),
        customPaging: () => (
            <div
                style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: '100%',
                    backgroundColor: 'rgb(225, 225, 225)'
                }}
            />
        )
    };
    return (
        <div className="slider-container" data-aos='fade-in' data-aos-delay='80'>
            <Slider {...settings}>
                <div>
                    <div className='feedback-card'>
                        <div className='merger'>
                            <img src={Avatar1} alt='' className='avatar'/>
                            <div>
                                <p>Глеб Пономарев</p>
                                <p style={{color: "gray", fontSize: 15}}>Курьер</p>
                            </div>
                        </div>
                        <p className='content-text'>
                            Работал IT специалистом, но решил попробовать что-то новое.
                            Теперь работаю курьером и получаю 100р в день! Доволен сервисом
                            и своими возможностями!
                        </p>
                    </div>
                </div>
                <div>
                    <div className='feedback-card'>
                        <div className='merger'>
                            <img src={Avatar2} alt='' className='avatar'/>
                            <div>
                                <p>Инга Пономарева</p>
                                <p style={{color: "gray", fontSize: 15}}>Проститутка</p>
                            </div>
                        </div>
                        <p className='content-text'>
                            Муж проиграл все деньги на крысиных бегах. Долго думала что делать дальше.
                            Не пришлось делать blowjob, ведь мне помог сервис flowjob! Теперь дети не
                            голодны!
                        </p>
                    </div>
                </div>
                <div>
                    <div className='feedback-card'>
                        <div className='merger'>
                            <img src={Avatar3} alt='' className='avatar'/>
                            <div>
                                <p>Митяй Пономарев</p>
                                <p style={{color: "gray", fontSize: 15}}>Туниядец</p>
                            </div>
                        </div>
                        <p className='content-text'>
                            После возвращения в Россию почувствовал потребность в работе. Меня никуда
                            не взяли, но предложения подобрали качественно. Благо у меня есть Глеб!
                        </p>
                    </div>
                </div>
                <div>
                    <div className='feedback-card'>
                        <div className='merger'>
                            <img src={Avatar1} alt='' className='avatar'/>
                            <div>
                                <p>Глеб Пономарев</p>
                                <p style={{color: "gray", fontSize: 15}}>Курьер</p>
                            </div>
                        </div>
                        <p className='content-text'>
                            Работал IT специалистом, но решил попробовать что-то новое.
                            Теперь работаю курьером и получаю 100р в день! Доволен сервисом
                            и своими возможностями!
                        </p>
                    </div>
                </div>
                <div>
                    <div className='feedback-card'>
                        <div className='merger'>
                            <img src={Avatar2} alt='' className='avatar'/>
                            <div>
                                <p>Инга Пономарева</p>
                                <p style={{color: "gray", fontSize: 15}}>Проститутка</p>
                            </div>
                        </div>
                        <p className='content-text'>
                            Муж проиграл все деньги на крысиных бегах. Долго думала что делать дальше.
                            Не пришлось делать blowjob, ведь мне помог сервис flowjob! Теперь дети не
                            голодны!
                        </p>
                    </div>
                </div>
                <div>
                    <div className='feedback-card'>
                        <div className='merger'>
                            <img src={Avatar3} alt='' className='avatar'/>
                            <div>
                                <p>Митяй Пономарев</p>
                                <p style={{color: "gray", fontSize: 15}}>Туниядец</p>
                            </div>
                        </div>
                        <p className='content-text'>
                            После возвращения в Россию почувствовал потребность в работе. Меня никуда
                            не взяли, но предложения подобрали качественно. Благо у меня есть Глеб!
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

function App() {
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <>
            {/* Navbar */}
            <nav data-aos='fade-in'>
                <div className='container nav-inner'>
                    <h3 className='nav-title'>Работа-Сейчас</h3>
                    <div className='nav-list'>
                        <div className='merger'>
                            <PointIcon width={25} height={25}/>
                            <p>г. Волгоград, ул. 7-й Гвардейской, 7</p>
                        </div>
                        <div className='merger'>
                            <PhoneIcon width={25} height={25}/>
                            <p>+7 900 123 456</p>
                        </div>
                    </div>
                    <div className='hamburger-container'>
                        <Hamburger toggled={isOpen} toggle={setOpen}/>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div className='mobile-menu'
                 style={isOpen ? {transform: 'translateY(90px)'} : {transform: 'translateY(-100px)'}}>
                <div className='merger'>
                    <PointIcon width={25} height={25}/>
                    <p>г. Волгоград, ул. 7-й Гвардейской, 7</p>
                </div>
                <div className='merger'>
                    <PhoneIcon width={25} height={25}/>
                    <p>+7 900 123 456</p>
                </div>
            </div>

            {/* Title Section */}
            <section id='section-1'>
                <div className='blob-svg'>
                    <SvgBlob1/>
                </div>
                <div className='blob-svg' style={{right: 0, top: '22rem'}}>
                    <SvgBlob2/>
                </div>
                <div className='container section-flexbox'>
                    <div className='section-content'>
                        <h1 data-aos="fade-up">
                            Работа - есть!
                        </h1>
                        <p data-aos="fade-up" data-aos-delay='50'>
                            Работа-Сейчас — это умный подбор вакансий, который экономит ваше время.
                            Мы соединяем вас с лучшими работодателями, предлагая только релевантные
                            предложения, которые соответствуют вашим целям и опыту. Начните путь к
                            новой карьере прямо сейчас!
                        </p>
                        <div data-aos="fade-up" data-aos-delay='100'>
                            <a className='work-btn' href='#'>Найти работу</a>
                        </div>

                    </div>
                    <div style={{position: 'relative'}} data-aos="fade-in">
                        <img className='circle-border' src={CircleBorder} alt=""/>
                        <img className='circle-image' src={CircleImg} alt=""/>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id='section-2'>
                <img className='abstract-img' src={AbstractImg} alt=""/>
                <img className='abstract-img' src={AbstractImg} alt=""
                     style={{right: 0, transform: ' rotate(180deg)'}}/>
                <div className='section-flexbox'>
                    <ContactForm/>
                </div>
            </section>

            {/* Vacancies Section */}
            <section id='section-3' style={{backgroundImage: `url(${Bg1})`}}>
                <div>
                    <div className='title' data-aos="fade-in" data-aos-delay='50'>
                        <div className='decor' style={{borderRadius: '12px 0 0 12px'}}/>
                        <h2>Вакансии</h2>
                        <div className='decor' style={{borderRadius: '0 12px 12px 0'}}/>
                    </div>
                    <p style={{textAlign: 'center', fontWeight: 300, marginBottom: '2rem'}} data-aos="fade-in" data-aos-delay='50'>
                        Индивидуальные вакансии для каждого
                    </p>
                </div>
                <div className='vacancy-list'>
                    <div className='vacancy-card' data-aos='fade-up' data-aos-offset="200">
                        <img src={BurgerKing} alt=""/>
                        <div className='inner'>
                            <p style={{fontWeight: 800}}>Бургер Кинг</p>
                            <p style={{fontWeight: 300}}>Lorem Ipsum is simply dummy text of the printing</p>
                            <p>От <span style={{color: 'var(--primary)', fontWeight: 800}}>55 000₽ в месяц</span></p>
                            <a href="#">Оставить заявку</a>
                        </div>
                    </div>
                    <div className='vacancy-card' data-aos='fade-up' data-aos-delay='50' data-aos-offset="200">
                        <img src={Ozon} alt=""/>
                        <div className='inner'>
                            <p style={{fontWeight: 800}}>ОЗОН</p>
                            <p style={{fontWeight: 300}}>Lorem Ipsum is simply dummy text of the printing</p>
                            <p>От <span style={{color: 'var(--primary)', fontWeight: 800}}>80 000₽ в месяц</span></p>
                            <a href="#">Оставить заявку</a>
                        </div>
                    </div>
                    <div className='vacancy-card' data-aos='fade-up' data-aos-delay='100' data-aos-offset="200">
                        <img src={Samokat} alt=""/>
                        <div className='inner'>
                            <p style={{fontWeight: 800}}>Самокат</p>
                            <p style={{fontWeight: 300}}>Lorem Ipsum is simply dummy text of the printing</p>
                            <p>От <span style={{color: 'var(--primary)', fontWeight: 800}}>65 000₽ в месяц</span></p>
                            <a href="#">Оставить заявку</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feedback Section */}
            <section id='section-4' style={{backgroundImage: `url(${Bg2})`}}>
                <div className='carousel-container'>
                    <div className='title' data-aos='fade-in' data-aos-delay='50'>
                        <div className='decor' style={{borderRadius: '12px 0 0 12px'}}/>
                        <h2>Отзывы наших клиентов</h2>
                        <div className='decor' style={{borderRadius: '0 12px 12px 0'}}/>
                    </div>
                    <FeedbackCarousel/>
                </div>
            </section>

            {/* How It Works Section */}
            <section id='section-5'>
                <div className='title' data-aos='fade-in' data-aos-delay='50' data-aos-duration='600'>
                    <div className='decor' style={{borderRadius: '12px 0 0 12px'}}/>
                    <h2 style={{textAlign: "center"}}>Как это работает</h2>
                    <div className='decor' style={{borderRadius: '0 12px 12px 0'}}/>
                </div>
                <p style={{fontWeight: 400, marginBottom: '4rem', textAlign: 'center'}}
                   data-aos='fade-in'
                   data-aos-delay='80'
                   data-aos-duration='600'
                >
                    3 простых шага до получения работы
                </p>
                <div className='step-list'>
                    <div className='step-merger' data-aos='fade-in' data-aos-delay='50' data-aos-duration='600'>
                        <div className='step-circle'>
                            <p>1</p>
                        </div>
                        <div>
                            <p style={{marginBottom: 8, fontWeight: 800}}>Заполните анкету</p>
                            <p style={{fontWeight: 400, color: 'rgba(30, 39, 47, 0.8)'}}>Укажите свои персональные
                                данные и контакты</p>
                        </div>
                    </div>
                    <div className='step-merger' data-aos='fade-in' data-aos-delay='100' data-aos-duration='600'>
                        <div className='step-circle'>
                            <p>2</p>
                        </div>
                        <div>
                            <p style={{marginBottom: 8, fontWeight: 800}}>Выберите предложения</p>
                            <p style={{fontWeight: 400, color: 'rgba(30, 39, 47, 0.8)'}}>
                                Выберите одно или несколько понравившихся предложений
                            </p>
                        </div>
                    </div>
                    <div className='step-merger' data-aos='fade-in' data-aos-delay='150' data-aos-duration='600'>
                        <div className='step-circle'>
                            <p>3</p>
                        </div>
                        <div>
                            <p style={{marginBottom: 8, fontWeight: 800}}>Получите работу</p>
                            <p style={{fontWeight: 400, color: 'rgba(30, 39, 47, 0.8)'}}>
                                После выбора с вами свяжутся работодатели и пригласят на собеседование
                            </p>
                        </div>
                    </div>
                </div>
                <div data-aos='fade-in' data-aos-delay='50' data-aos-duration='600'>
                    <a className='work-btn' href="#">
                        Оставить заявку
                    </a>
                </div>
            </section>

            {/* Vacancies Found Section */}
            <section id='section-6' style={{backgroundImage: `url(${Bg3})`}}>
                <div className='flexbox' data-aos='fade-up' data-aos-offset="200" data-aos-duration='600'>
                    <div className='content-text'>
                        <h3 style={{fontWeight: 800}}>Найдено 23 доступных вакансии</h3>
                        <p>Просмотрите доступные Вам вакансии</p>
                    </div>
                    <a href='#' className='primary-btn'>
                        <p>Смотреть</p>
                        <SvgArrow color='white'/>
                    </a>
                </div>
            </section>

            {/* Contacts Section */}
            <section id='section-7'>
                <div className='title' data-aos='fade-in' data-aos-offset="200" data-aos-duration='600'>
                    <div className='decor' style={{borderRadius: '12px 0 0 12px'}}/>
                    <h2 style={{textAlign: "center"}}>Контакты</h2>
                    <div className='decor' style={{borderRadius: '0 12px 12px 0'}}/>
                </div>
                <p className='desc' data-aos='fade-in' data-aos-duration='600'>
                    Свяжитесь с нами, если остались вопросы
                </p>
                <div className='contacts-flexbox'>
                    <div className='contacts-grid'>
                        <div className='contacts-grid-item' data-aos='fade-up' data-aos-delay="50" data-aos-duration='600'>
                            <MailIcon/>
                            <p className='title'>Почта</p>
                            <p style={{textAlign: "center"}}>support@leadflow-tech.ru</p>
                        </div>
                        <div className='contacts-grid-item' data-aos='fade-up' data-aos-offset="100" data-aos-duration='600'>
                            <PhoneIcon width={55} height={55}/>
                            <p className='title'>Телефон</p>
                            <p style={{textAlign: "center"}}>+7 (999) 769-23-59</p>
                        </div>
                        <div className='contacts-grid-item' data-aos='fade-up' data-aos-offset="150" data-aos-duration='600'>
                            <PointIcon width={66} height={66}/>
                            <p className='title'>Адрес</p>
                            <p style={{textAlign: "center"}}>г. Волгоград ул 7-ой Гвардейской д. 7</p>
                        </div>
                        <div className='contacts-grid-item' data-aos='fade-up' data-aos-offset="200" data-aos-duration='600'>
                            <div style={{width: 55, height: 55}}/>
                            <p className='title'>Соцсети</p>
                            <div className='social-list'>
                                <a href="#">
                                    <img src={Facebook} alt=""/>
                                </a>
                                <a href="#">
                                    <img src={Instagram} alt=""/>
                                </a>
                                <a href="#">
                                    <img src={Youtube} alt=""/>
                                </a>
                                <a href="#">
                                    <img src={Twitter} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <img src={Map} alt="" style={{width: '100%'}} data-aos='fade-in' data-aos-offset="200" data-aos-duration='600'/>
                </div>
            </section>

            {/* Pre-Footer */}
            <div className='pre-footer'>
                <div className='container'>
                    <div>
                        <p style={{fontWeight: 800, marginBottom: 10}}>Работа-Сейчас</p>
                        <p style={{fontWeight: 400}}>Найти работу - это просто!</p>
                    </div>
                    <div className='list'>
                        <a href="#">Главная</a>
                        <a href="#">Найти работу</a>
                        <a href="#">Документы</a>
                        <a href="#">Контакты</a>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer>
                <div className='container'>
                    <p>© 2024 г. ИП Пономарев Г.В</p>
                    <p>support@leadflow-tech.ru</p>
                </div>
            </footer>
        </>
    )
}

export default App
