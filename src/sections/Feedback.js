
import Container from '../components/Container';
import Flag from '../components/Flag';

const Feedback = () => {
  return <section className="feedback">
    <Container>
        <div className='feedback__body'>
            <header className='feedback__header section-header'>
                <Flag className="feedback__flag" color="white">Testimonials</Flag>
                <h2 className='title title--blue feedback__title section-header__title'>What our students say</h2>
                <p className='feedback__subtitle section-header__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
            </header>
        </div>
    </Container>
  </section>
}

export default Feedback;