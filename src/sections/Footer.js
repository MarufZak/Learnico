import Container from '../components/Container';
import Icon from '../components/Icon';

const Footer = () => {

    const handleClick = (e)=>{
        e.currentTarget.parentElement.classList.toggle('active');
    };

  return <footer className="footer">
    <Container>
        <div className='footer__body'>
            <div className='footer__content'>
                <p className='footer__content-text'>Join our newsletter to stay up to date on features and releases.</p>
                <form className='footer__form'>
                    <input className='footer__form-input' type="text" />
                    <button role="submit" className='btn btn--green footer__form-submit'>Subscribe</button>
                </form>
                <p className='footer__content-text'>and provide consent to receive updates from our company.</p>
            </div>
            <div className='footer__lists'>
                <div className='footer__list-block collapsible'>
                    <header onClick={(e)=>handleClick(e)} className='collapsible__header'>
                        <h3 className='title title--white footer__list-title collapsible__title'>CMS Pages</h3>
                        <span className='icon--white collapsible__icon'>
                            <Icon icon="arrow_right" />
                        </span>
                    </header>
                    <ul className='footer__list collapsible__content'>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Blog Post</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Blog Categories</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Courses Single</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Courses Categories</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Product Page</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Product Categories</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Teachers Single</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Episode Single</a>
                    </li>
                    </ul>
                </div>
                <div className='footer__list-block collapsible'>
                    <header onClick={handleClick} className='collapsible__header'>
                        <h3 className='title title--white footer__list-title collapsible__title'>Pages</h3>
                        <span className='icon icon--white collapsible__icon'>
                            <Icon icon="arrow_right" />
                        </span>
                    </header>
                    <ul className='footer__list collapsible__content'>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Home</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">About</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Contact</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Blog</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Courses</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Teachers</a>
                    </li>
                    </ul>
                </div>
                <div className='footer__list-block collapsible'>
                    <header onClick={handleClick} className='collapsible__header'>
                        <h3 className='title title--white footer__list-title collapsible__title'>Account Pages</h3>
                        <span className='icon icon--white collapsible__icon'>
                            <Icon icon="arrow_right" />
                        </span>
                    </header>
                    <ul className='footer__list collapsible__content'>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Login</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Sign Up</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Forgot Password</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Reset Password</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Email Confirmation</a>
                    </li>
                    </ul>
                </div>
                <div className='footer__list-block collapsible'>
                    <header onClick={handleClick} className='collapsible__header'>
                        <h3 className='title title--white footer__list-title collapsible__title'>Utility Pages</h3>
                        <span className='icon icon--white collapsible__icon'>
                            <Icon icon="arrow_right" />
                        </span>
                    </header>
                    <ul className='footer__list collapsible__content'>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Style Guide</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Changelog</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Licenses</a>
                    </li>
                    <li className='footer__item'>
                        <a className='footer__link' href="//">Password</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className='footer__license'>
                <p className='footer__license-text'>&copy; Learnico by Minimal Square. Powered by Webflow</p>
                <div className='footer__media list'>
                    <span className='icon--rectangle icon--white'>
                        <Icon icon="facebook" />
                    </span>
                    <span className='icon--rectangle icon--white'>
                        <Icon icon="twitter" />
                    </span>
                    <span className='icon--rectangle icon--white'>
                        <Icon icon="instagram" />
                    </span>
                </div>
            </div>
        </div>
    </Container>
  </footer>
}

export default Footer;