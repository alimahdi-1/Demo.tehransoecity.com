import "./styles.css";
import { VscHome, VscMail } from "react-icons/vsc";
import { VscRepo } from "react-icons/vsc";
import { VscTelescope } from "react-icons/vsc";
import { VscPerson } from "react-icons/vsc";
import { VscOutput } from "react-icons/vsc";
import { VscOpenPreview } from "react-icons/vsc";
import { VscSymbolOperator } from "react-icons/vsc";
import Accordian from "../accordian";
import SocialSection from "../Social-section";
import Daraje2 from "../Daraje2-component";
import Footer from "../Footer";
import Screen from "../width/Width";

export default function Page() {
  return (
    <div className="main-page" >
      <div className="main-page-container" >
        <div className="main-container" >
          <div className="hero-main-page">
            <section>
              <div className="div-flex">
                <h1>
                  !وبلاگ علمی تهران سوسایتی
                  <br />
                  روشی نو برای پیشرفت{" "}
                </h1>
                <VscSymbolOperator className="symbol-oparator" />
              </div>

              <p>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را
                برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در
                زبان فارسی ایجاد کرد
              </p>
            </section>
          </div>
          <div className="accordian-Social-container">
            <Accordian />
          </div>
          <div className="daraje2-container">
          <h2></h2>
          <Daraje2/>

          </div>
        </div>
        <div className="side-container">
          <ul>
            <li>
              <a href="#">
                {" "}
                خانه <VscHome className="icon-sticky-sidebar" />
              </a>
            </li>
            <li>
              <a href="#">
                سوالات متداول <VscRepo className="icon-sticky-sidebar" />
              </a>
            </li>
            <li>
              <a href="#">
                پژوهش ها <VscTelescope className="icon-sticky-sidebar" />
              </a>
            </li>
            <br />
            <li>
              <a href="#">
                کاربران <VscPerson className="icon-sticky-sidebar" />
              </a>
            </li>
            <li>
              <a href="#">
                ارسال رزومه <VscOutput className="icon-sticky-sidebar" />
              </a>
            </li>
            <h5>پشتیبانی</h5>
            <li>
              <a href="#">
                تیکت <VscMail className="icon-sticky-sidebar" />
              </a>
            </li>
            <li>
              <a href="#">
                راهنمایی <VscOpenPreview className="icon-sticky-sidebar" />
              </a>
            </li>
          </ul>
          <div></div>
        </div>
      </div>      
    </div>

  );
}
