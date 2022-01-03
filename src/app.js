
import { BiCopyright } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import {BsLinkedin } from "react-icons/bs";
import  './app.css';

function Navbar(){
  return(  <>
  <div className="footer">
<div className="footer1">

    <div className="courseDetail container">
    <div className="title"><a href="">Quick Access</a></div>
<ul><li><a href="">B.tech Courses</a></li>
<li><a href="">M.tech Courses</a></li>
<li><a href="">Our Alumni</a></li>
<li><a href="">Photo Gallery</a></li>
<li><a href="">Visitors</a></li>
</ul>
    </div>
   <div className="Source container">
   <div className="title"><a href="">Student Corner</a></div>
   <ul>
       <li><a href="">Youtube Channel</a></li>
       <li><a href="">Online Resources</a></li>
       <li><a href="">Notifications</a></li>
   </ul>
   </div> 
   <div className="social container">
   <div className="title"><a href="">Get In Touch</a></div>
   <ul>
       <li><FiMail/><a href="">tap@iiitranchi.ac.in</a></li>
       <li><FiMail/><a href="">tap@iiitranchi.ac.in</a></li>
       <li><BsLinkedin/><a href="">linked in/in/tapcell_iiitranchi</a></li>
   </ul>
   </div> 

</div>
<div className="footer2">
<BiCopyright/> Indian Institute of Information Technology Ranchi 2022
</div>
  </div>
    </>
   )
}
export default Navbar;