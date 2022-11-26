
import Container from '../components/Container';
import Flag from '../components/Flag';
import Button from '../components/Button';

const Students = () => {
  return <section className="students">
    <Container>
        <div className="students__body">
            <div className="students__content">
                <Flag color="white">Join us</Flag>
                <h2 className="title title--blue students__title">Join more than 17,000+ students all over the world</h2>
                <p className="students__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                <Button className="students__btn" color="blue">Get started</Button>
            </div>
            <div className="students__img-block">
              <picture>
                <source type='image/webp' srcset="./img/students/students@w280.webp 280w, ./img/students/students@w482.webp 482w, ./img/students/students@w640.webp 640w" src="./img/students/students@w640.webp" sizes='(max-width: 676px) 90vw, 45vw' />
                <source type='image/jpg' srcset="./img/students/students@w280.jpg 280w, ./img/students/students@w482.jpg 482w, ./img/students/students@w640.jpg 640w" src="./img/students/students@w640.jpg" sizes='(max-width: 676px) 90vw, 45vw' />
                <img className="students__img" src="./img/students/students@w640.jpg" alt="students" />
              </picture>
            </div>
        </div>
    </Container>
  </section>
}

export default Students;