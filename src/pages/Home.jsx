import Hero from '../comp/Hero/hero';
import About from '../comp/About/about';
import Team from '../comp/Team/team';
import HeaderHome from '../comp/Header/headerH';
import Review from '../comp/Review/review';

function Home(){
   return(
      <>
      <HeaderHome/>
         <Hero />
         <About />
         <Team />
         <Review/>
      </>
   )
}

export default Home