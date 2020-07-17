import Layout from '../components/Layout';
import Link from 'next/link';
import Carosal from '../components/Carosal'
import About from './About'
import Experience from './experience'
import Contact from './contact'

const Index = () => {
    let carosalUrl ={
        img1:'https://d1vspk6fa50cdj.cloudfront.net/images/ooty/ooty-trip-2017/ooty/1000/3S0A4508-copyright-manohar-negi.jpg',
        img2:'https://d1vspk6fa50cdj.cloudfront.net/images/ooty/ooty-trip-2017/camping-in-ooty/2000/3S0A4718-copyright-manohar-negi.jpg',
        img3:'https://d1vspk6fa50cdj.cloudfront.net/images/ooty/ooty-trip-2017/ooty/1000/3S0A4479-copyright-manohar-negi.jpg'
    }
    return (
        <Layout className="App">
             <Carosal images={carosalUrl}/>
             <About />
             <Experience />
             <Contact />
        </Layout>
    );
};

export default Index;
