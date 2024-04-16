import Nav from './../../Components/Nav/Nav';
import Footer from './../../Components/Footer/Footer';
const Error = () => {
    document.title = "404 Not Found"
    return (
        <div className='font-outfit'>
           <Nav></Nav>
           <div className='container mx-auto py-20 lg:py-32 px-3'>
            <div className='text-center text-2xl lg:text-5xl space-y-6'>
                <h1>4O4</h1>
                <span className='block'>Page Not Found</span>
            </div>
           </div>
           <Footer></Footer>
        </div>
    );
};

export default Error;