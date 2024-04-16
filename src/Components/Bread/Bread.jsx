import PropTypes from "prop-types"
const Bread = ({title}) => {
    return (
        <div className="py-10 lg:py-20 mb-10 bg-[#0F280F]">
           <div className="container mx-auto px-3">
                <div className="text-white text-xl md:text-3xl text-center">
                    <h1>{title}</h1>    
                </div>            
            </div> 
        </div>
    );
};
Bread.propTypes = {
    title: PropTypes.string
}
export default Bread;