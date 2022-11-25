import Container from '../components/Container';
import Flag from '../components/Flag';


const Courses = () => {
  return <section className="courses">
    <Container>
        <div className="courses__body">
            <header className="courses__header section-header">
                <Flag className="section-header__flag" color="pink">Trending</Flag>
                <h2 className="title title--blue courses__title section-header__title">The most popular courses</h2>
                <p className="courses__subtitle section-header__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
            </header>
            <div className="courses__carts"></div>
        </div>
    </Container>
  </section>
}

export default Courses;