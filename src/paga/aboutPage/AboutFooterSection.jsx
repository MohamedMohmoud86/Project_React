import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";




function AboutFooterSection() {



  return (
    <div className="about_footer">

      {/* Top Features */}
      <div className="features">
        <div className="feature">
          <h4>Free Shipping</h4>
          <p>On orders over $100</p>
        </div>

        <div className="feature">
          <h4>Secure Payment</h4>
          <p>100% protected payments</p>
        </div>

        <div className="feature">
          <h4>Easy Return</h4>
          <p>30-day return policy</p>
        </div>

        <div className="feature">
          <h4>24/7 Support</h4>
          <p>Dedicated support</p>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="footer_info container">

        <div className=" box">
          <h2 className="logo">App</h2>
          <p>Powering your world with the best electronics.</p>
          <p>fci_zu zagazig</p>
          <p>Email: r4rfredtre3@gmail.com </p>
        </div>

        <div className=" box">
          <h3>Customer Service</h3>
          <p>Contact Us</p>
          <p>Shipping & Reboxs</p>
          <p>FAQs</p>
        </div>

        <div className=" box">
          <h3>Follow Us</h3>
          <div className="socials">
            <span><SlSocialFacebook /></span>
            <span><FaInstagram /></span>
            <span><CiTwitter /></span>
            <span><FiYoutube /></span>
          </div>
        </div>

        <div className=" box">
          <h3>Stay in the Loop</h3>
          <div className="subscribe">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>

      <div className="copy">
        © 2025 Reda. All rights reserved
      </div>

    </div>
  );
}

export default AboutFooterSection;