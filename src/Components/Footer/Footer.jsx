import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-[#0F280F] mt-24">
      <div className="container mx-auto px-3">
        <div className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-3">
            <div className="col-span-1 space-y-4">
              <div>
                <h1 className="text-5xl text-white font-bold">Nest.X</h1>
              </div>
              <div className="text-[#ABABAB]">
                <p>
                Your premier destination for finding the perfect home. Explore a curated collection of properties tailored to your needs, backed by expert guidance every step of the way.
                </p>
              </div>
              <div className="text-white">
                <div className="flex items-center gap-3">
                  <div>
                    <MdLocationPin></MdLocationPin>
                  </div>
                  <div>
                    <p className="text-white">Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <IoIosMail></IoIosMail>
                  </div>
                  <div>
                    <p className="text-white">support@nestx.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div>
                    <FiPhoneCall></FiPhoneCall>
                  </div>
                  <div>
                    <p className="text-white">Dhaka, Bangladesh</p>
                  </div>
                </div>

                {/* <p className="text-white">support@nestx.com</p>
                                <span className="text-white">+88017********</span> */}
              </div>
            </div>
            <div className="col-span-1 text-left lg:text-center space-y-8">
              <div className="text-white text-xl font-medium">
                <h1>Popular</h1>
              </div>
              <div className="text-[#ABABAB]">
                <ul className="space-y-2">
                  <li>Single Family</li>
                  <li>Large Family</li>
                  <li>Apartment for Sale</li>
                  <li>Apartment for Rent</li>
                  <li>Office</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1  text-left lg:text-center space-y-8">
              <div className="text-white text-xl font-medium">
                <h1>Quick links</h1>
              </div>
              <div className="text-[#ABABAB]">
                <ul className="space-y-2">
                  <li>Terms of Use</li>
                  <li>Privacy Police</li>
                  <li>Contact Support</li>
                  <li>Careers</li>
                  <li>FAQs</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1  text-left lg:text-center space-y-4">
              <div>
                <h1 className="text-2xl text-white font-medium">News Letter</h1>
              </div>
              <div className="text-[#ABABAB]">
                <p>Subscribe to our newsletter.</p>
              </div>
              <div className="text-[#ABABAB]">
                <div className="flex items-center bg-white rounded-full">
                  <div className="flex-grow">
                    <input
                      className="w-full text-base px-6  rounded-full border-none outline-none"
                      type="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="p-2">
                    <h1 className="py-2 cursor-pointer bg-[#65B110] text-white font-semibold px-4 rounded-full">
                      Submit
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 text-[#ABABAB]">
            <span>All Right Reserved By @nestx.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
