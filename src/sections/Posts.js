import Button from "../components/Button";
import Container from "../components/Container";
import Flag from "../components/Flag";


const Posts = () => {
  return <section className="posts">
    <Container> 
        <div className="posts__body">
            <Flag color="pink">Blog</Flag>
            <header className="posts__header">
                <h2 className="title title--white posts__title">Our latest posts</h2>
                <Button color="white" className="posts__btn">View all</Button>
            </header>
            <div className="posts__carts">
                <article className="posts__cart"> 
                    <img className="posts__cart-img" src="./img/features/features.jpg" alt="post" />
                    <div className="posts__cart-content">
                        <Flag className="posts__cart-flag" color="green">Freelance</Flag>
                        <h3 className="title title--blue posts__cart-title">7 freelance mistakes to avoid</h3>
                        <p className="posts__cart-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <Button className="posts__cart-btn" color="transparent" icon="arrow_right">Read more</Button>
                    </div>
                </article>
                <article className="posts__cart">
                    <img className="posts__cart-img" src="./img/features/features.jpg" alt="post" />
                    <div className="posts__cart-content">
                        <Flag className="posts__cart-flag" color="green">UI/UX Design</Flag>
                        <h3 className="title title--blue posts__cart-title">Brand design process explained</h3>
                        <p className="posts__cart-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <Button className="posts__cart-btn" color="transparent" icon="arrow_right">Read more</Button>
                    </div>
                </article>
                <article className="posts__cart">
                    <img className="posts__cart-img" src="./img/features/features.jpg" alt="post" />
                    <div className="posts__cart-content">
                        <Flag className="posts__cart-flag" color="green">Business</Flag>
                        <h3 className="title title--blue posts__cart-title">The beginner's guide to recruiting a Webflow developer</h3>
                        <p className="posts__cart-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                    <Button className="posts__cart-btn" color="transparent" icon="arrow_right">Read more</Button>
                    </div>
                </article>
            </div>
        </div>
    </Container>
  </section>
}

export default Posts;