
import Container from '../components/Container';
import Button from '../components/Button';

const Start = () => {
  return <section className="start">
    <Container>
        <div className='start__body section-header'>
            <h2 className='title title--white section-header__title'>Start learning today</h2>
            <p className='start__text section-header__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            <div className='start__buttons list'>
                <Button className="start__btn section-header__btn" color="green">Get started</Button>
                <Button className="start__btn section-header__btn" color="white">Contact us</Button>
            </div>
        </div>
    </Container>
  </section>
}

export default Start;