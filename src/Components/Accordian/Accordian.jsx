const Accordian = () => {
    return (
        <div className="flex justify-center">
            <div className="join join-vertical w-full lg:w-[60%]">
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" defaultChecked /> 
    <div className="collapse-title text-xl font-medium">
      <h1>Expertise</h1>
    </div>
    <div className="collapse-content"> 
      <p>Our team comprises seasoned real estate professionals with in-depth knowledge of the local market. Benefit from their expertise and insights as they guide you through every step of your home buying journey.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
    <h1>Personalized Service</h1>
    </div>
    <div className="collapse-content"> 
      <p>We understand that every homebuyer is unique, with distinct preferences and requirements. That's why we offer personalized service tailored to your specific needs, ensuring a seamless and satisfying experience from start to finish.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      <h1>Extensive Listings</h1>
    </div>
    <div className="collapse-content"> 
      <p>Gain access to an extensive database of residential properties, including exclusive listings not found elsewhere. Whether you're searching for a cozy starter home or a luxurious estate, we have options to suit every taste and budget.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      <h1>Transparent Communication</h1>
    </div>
    <div className="collapse-content"> 
      <p>Our track record speaks for itself. We take pride in our commitment to client satisfaction and have helped numerous individuals and families find their dream homes. Join our roster of happy homeowners and experience the difference for yourself.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      <h1>Client Satisfaction</h1>
    </div>
    <div className="collapse-content"> 
      <p>Communication is key in the real estate process, and we prioritize transparency every step of the way. You can trust us to provide clear and honest information, answer your questions promptly, and keep you informed throughout the entire transaction.</p>
    </div>
  </div>
  <div className="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name="my-accordion-4" /> 
    <div className="collapse-title text-xl font-medium">
      <h1>Community Engagement</h1>
    </div>
    <div className="collapse-content"> 
      <p>Beyond just buying and selling properties, we are deeply invested in the communities we serve. Count on us to provide valuable insights into neighborhood dynamics, schools, amenities, and more, helping you make an informed decision about where to plant your roots.</p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Accordian;