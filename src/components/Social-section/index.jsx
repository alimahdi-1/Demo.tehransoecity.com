import "./styles.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
export default function SocialSection() {
  return (
    <div className="social-container">
      <div>
        <FaInstagram className="social-item" />
      </div>
      <div>
        <FaTelegramPlane className="social-item" />
      </div>
      <div>
        <CiTwitter className="social-item" />
      </div>
      <div>
        <CiYoutube className="social-item" />
      </div>
      
    </div>
  );
}
