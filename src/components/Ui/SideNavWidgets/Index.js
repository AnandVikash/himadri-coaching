import "./sidenav.css";
import { IoCallSharp } from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";
export default function Index() {
  return (
    <>
      <div id="mysidenav">
        {/* <div id="sidenavappointment">
          <a
            href="https://api.whatsapp.com/send/?phone=9035638899&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <BsWhatsapp />
            Book Appointment
          </a>
        </div> */}
        <div id="sidenavphone">
          <a href="tel:+919740346715" target="_blank">
            <IoCallSharp />
            Call Us
          </a>
        </div>
      </div>
    </>
  );
}
