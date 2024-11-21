import SocialSection from "../Social-section";
import { FaRegCopyright } from "react-icons/fa6";

import "./styles.css";
export default function Footer() {
  return (
    <div className="footer-main">
      <div className="footer-container">
        <div>
          <ul>
            <h4>تهران سوسایتی</h4>
            <li>اطلاع رسانی</li>
            <li>راهنمایی</li>
            <li>تماس</li>
          </ul>
          <ul>
            <h4>بخش ها</h4>
            <li>مقاله ها</li>
            <li>جعبه ابزار</li>
            <li>سوال از هوش مصنوعی</li>
            <li>پشتیبانی</li>
          </ul>
          <ul>
            <h4>شرکت ما</h4>
            <li> ارسال رزومه</li>
            <li>همکاری</li>
            <li>جذب اسپانسر</li>
          </ul>
        </div>
      </div>
      <div className="footer-container-mobile">
        <div>
          <h4>تهران سوسایتی</h4>
          <ul>
            <li>اطلاع رسانی</li>
            <li>راهنمایی</li>
            <li>تماس</li>
          </ul>
          <h4>بخش ها</h4>
          <ul>
            <li>مقاله ها</li>
            <li>جعبه ابزار</li>
            <li>سوال از هوش مصنوعی</li>
            <li>پشتیبانی</li>
          </ul>
          <h4>شرکت ما</h4>
          <ul>
            <li> ارسال رزومه</li>
            <li>همکاری</li>
            <li>جذب اسپانسر</li>
          </ul>
        </div>
      </div>
      <SocialSection />
      <div className="copy-right-footer">
        <p>
          Designed By Ali Mahdi <br /> TehranSoceity <FaRegCopyright />
        </p>
      </div>
    </div>
  );
}
