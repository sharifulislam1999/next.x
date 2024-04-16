import PropTypes from 'prop-types';
const Title = ({ title, des }) => {
  return (
    <div className="text-center space-y-4 my-20">
      <div className="text-2xl lg:text-5xl font-semibold">
        <h1>{title}</h1>
      </div>
      <div className="lg:w-[40%] text-base text-[#605c5c] mx-auto px-5">
        <p>{des}</p>
      </div>
    </div>
  );
};
Title.propTypes = {
    title: PropTypes.string,
    des: PropTypes.string
}

export default Title;
