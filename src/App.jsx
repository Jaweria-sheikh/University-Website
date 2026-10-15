import React, { useState } from "react";
import logo from "./assets/gr.png";
import building1 from "./assets/building1.webp";
import building2 from "./assets/building2.avif";
import building3 from "./assets/building3.jpg";
import meeting from "./assets/meeting.png";
import library from "./assets/library.png";
import basketball from "./assets/basketball.png";
import cafeteria from "./assets/cafeteria.png";
import girl from "./assets/girl.jpg";
import boy from "./assets/boy.jpg";
import contactImg from "./assets/contactImg.jpg";
import background from "./assets/background.png";

import './App.css';

function Website(){
  const [menuOpen, setMenuOpen] = useState(false);
  return(
    <>
    

<nav className="university-navbar">
  <div className="navbar-container">

    {/* Logo */}
    <a href="#home" className="navbar-logo">
      <img src={logo} alt="EduFord Logo" />
      <span className="text-black">EduFord</span>
    </a>

    {/* Toggle Button */}
    <button
      type="button"
      className="navbar-toggle"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={menuOpen}
      aria-controls="navbar-default"
    >
      {menuOpen ? (
        /* Cross icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M18 6 6 18M6 6l12 12" />
        </svg>
      ) : (
        /* Hamburger icon */
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>

    {/* Navigation Links */}
    <div
      id="navbar-default"
      className={`navbar-menu ${menuOpen ? "active" : ""}`}
    >
      <ul className="navbar-links">
        <li>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#courses" onClick={() => setMenuOpen(false)}>
            Courses
          </a>
        </li>
        <li>
          <a href="#campus" onClick={() => setMenuOpen(false)}>
            Campus
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
      </ul>
    </div>

  </div>
</nav>

 {/* background picture */}
  <section className="hero-section text-gray-600 body-font relative h-[500px] w-full overflow-hidden sm:h-[600px]">
  <img src={background} className="h-full w-full heroImg" />
</section>
 
 {/* home content */}
  <div className="text-center HomeContent">
   <h1 className="sm:text-3xl text-2xl head1">World's Biggest University</h1>
   <br />
   <p className="para1">Empowering minds, shaping the future Where knowledge meets opportunity Excellence in education, innovation, and research <br /> A global hub for learning and leadership.</p>
   <br /> <br />
  <button>Visit us to Know More</button>
  </div>

 {/* courses section */}
  <section className="text-gray-600 body-font courseSection">
     <div className="flex flex-col text-center w-full">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Courses we offer</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enroll for our various online courses Anywhere from the world.</p>

  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-red-50 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative cards">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Intermediate</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Lorem ipsum dolor sit amet consectetur adipisicing elit tousled waistcoatl.</p>
          
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-red-50 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative cards">
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Degree</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat. Lorem ipsum dolor sit amet consectetur, adipisicing elit tousled waistcoatl.
          </p>
          
          
        </div>
      </div>
      <div className="p-4 lg:w-1/3">
        <div className="h-full bg-red-50 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative cards">
         
          <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Post Graduation</h1>
          <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoatl Lorem ipsum dolor sit amet, consectetur adipisicing elit tousled waistcoatl.</p>
          
          
        </div>
      </div>
    </div>
  </div>
    </div>
  </section>

  {/* campus section */}
    <section className="text-gray-600 body-font subsectionContent">
     <div className="flex flex-col text-center w-full">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Our Global Campus</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Enroll for our various online courses Anywhere from the world.</p>
      </div>

      

<div className="flex justify-center flex-wrap items-center gap-15 campusImages">

  <div className="campusCard">
    <img
      className="buildings"
      src={building1}
      alt="London Campus"
    />
    <div className="campusOverlay">
      <h2>London</h2>
    </div>
  </div>

  <div className="campusCard">
    <img
      className="buildings"
      src={building2}
      alt="Canada Campus"
    />
    <div className="campusOverlay">
      <h2>Canada</h2>
    </div>
  </div>

  <div className="campusCard">
    <img
      className="buildings"
      src={building3}
      alt="New York Campus"
    />
    <div className="campusOverlay">
      <h2>New York</h2>
    </div>
  </div>

</div>

              

     </section>

     {/* facilities section */}
     <div className="flex flex-col text-center w-full facilites">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Our Facilities</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

  <section>

    <div className="flex flex-wrap justify-center items-center sm:-m-4 -mx-4 -mb-10 -mt-4 content">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 facilitiesCard">
        <div className="rounded-lg p-3 h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={library} />
        </div>
        <h2 className="text-2xl font-bold ml-3 title-font text-gray-900 mt-5">World Class Library</h2>
        <p className="text-base text-gray-600 ml-3 leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. </p>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 facilitiesCard">
        <div className="rounded-lg p-3 h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={basketball} />
        </div>
        <h2 className="text-2xl font-bold ml-3 title-font text-gray-900 mt-5">Largest Play Ground</h2>
        <p className="text-base text-gray-600 ml-3 leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed. </p>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6 facilitiesCard">
        <div className="rounded-lg p-3 h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src={cafeteria} />
        </div>
        <h2 className="text-2xl font-bold title-font ml-3 text-gray-900 mt-5">Tasty and Healthy Food</h2>
        <p className="text-base text-gray-600 ml-3 leading-relaxed mt-2">Swag shoivdigoitch literally meditation subway tile tumblr cold-pressed.</p>
      </div>
    </div>
   </section>

   {/* review section */}
    <div className="flex flex-col text-center w-full facilites review">
      <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">What Our Students Says</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </div>

     <section className="text-gray-600 body-font review">
  <div className="container px-5 py-24 mx-auto">
   
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-red-50 p-8 rounded">
           <a className="inline-flex items-center">
            <img alt="testimonial" src={girl} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">Cristline Berkley</span>
              <span className="text-gray-500 text-sm">UI DEVELOPER</span>
            </span>
          </a>
          <p className="leading-relaxed mt-5">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>

          <div className="flex items-center space-x-1 mt-3">
    <svg className="w-5 h-5 text-fg-yellow star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-fg-yellow star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-fg-yellow star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-fg-yellow star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="grey" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
  </div>

        </div>
      </div>
      <div className="p-4 md:w-1/2 w-full">
        <div className="h-full bg-red-50 p-8 rounded">
           <a className="inline-flex items-center">
            <img alt="testimonial" src={boy} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"/>
            <span className="flex-grow flex flex-col pl-4">
              <span className="title-font font-medium text-gray-900">David Ryer</span>
              <span className="text-gray-500 text-sm">DESIGNER</span>
            </span>
          </a>
          <p className="leading-relaxed mt-5">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>

          <div className="flex items-center space-x-1 mt-3">
    <svg className="w-5 h-5 text-fg-yellow star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-fg-yellow star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-fg-yellow star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-fg-yellow star" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
    <svg className="w-5 h-5 text-fg-disabled" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="grey" viewBox="0 0 24 24"><path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z"/></svg>
  </div>
         
        </div>
      </div>
    </div>
  </div>
  </section>

  <div className="h-[500px] w-full overflow-hidden sm:h-[500px] meeting"> 
    <img src={meeting} className="h-full w-full meetingImage" />
    <div className="text-center HomeContent">
   <h1 className="sm:text-3xl text-2xl head1">Enroll For Our Various Online Courses <br /> Anywhere From the World</h1>
   <br /> <br />
  <button>Enroll Now!</button>
  </div>
  </div>
  <br /><br /><br /><br /><br />

  {/* contact image */}
  <div className="h-[500px] w-full overflow-hidden sm:h-[500px] meeting"> 
    <img src={contactImg} className="h-full w-full meetingImage" />
    <div className="text-center HomeContent">
   <h1 className="sm:text-3xl text-2xl head2">Contact Us!</h1>
  </div>
  </div>
  <br /><br /><br /><br /><br /><br /><br /><br />


  {/* map */}
  <br /><br /><br /><br /><br /><br /><br /><br />
   <div className="contactMap">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.710654644224!2d67.03367497457008!3d24.87373004472801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e5d664e5c47%3A0x59af50a7e6aeac9b!2sSaylani%20Welfare%20Numaish%20Branch!5e0!3m2!1sen!2s!4v1790811326051!5m2!1sen!2s" width="1200" height="500" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" className="map"></iframe>
   </div>



{/* CONTACT SECTION */}
<section id="contact" className="contact-section">
  <div className="contact-title">
    <h1>Contact Us</h1>
    <p>
      Have questions about our courses or admissions?
      Feel free to get in touch with us.
    </p>
  </div>

  <div className="contact-container">
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        alert("Thank you for contacting EduFord!");
        e.currentTarget.reset();
      }}
    >
      <h2>Send Us a Message</h2>

      <div className="form-group">
        <label htmlFor="contactName">Your Name</label>
        <input
          id="contactName"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contactEmail">Your Email</label>
        <input
          id="contactEmail"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contactSubject">Subject</label>
        <input
          id="contactSubject"
          name="subject"
          type="text"
          placeholder="Enter subject"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contactMessage">Your Message</label>
        <textarea
          id="contactMessage"
          name="message"
          rows="5"
          placeholder="Write your message..."
          required
        />
      </div>

      <button type="submit" className="contact-btn">
        Send Message
      </button>
    </form>

    <div className="contact-details">
      <h2>Get in Touch</h2>
      <p>
        We are here to help you with your educational journey.
        Contact us for information about our programs and admissions.
      </p>

      <div className="contact-item">
        <span className="contact-symbol">✉</span>
        <div>
          <h4>Email</h4>
          <p>info@eduford.com</p>
        </div>
      </div>

      <div className="contact-item">
        <span className="contact-symbol">☎</span>
        <div>
          <h4>Phone</h4>
          <p>+92 300 1234567</p>
        </div>
      </div>

      <div className="contact-item">
        <span className="contact-symbol">⌖</span>
        <div>
          <h4>Address</h4>
          <p>Karachi, Pakistan</p>
        </div>
      </div>

      <div className="contact-note">
        <h3>We'd Love to Hear From You!</h3>
        <p>
          Your questions and feedback are always welcome.
        </p>
      </div>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="eduford-footer">
  <div className="footer-container">
    <div className="footer-about">
      <a href="#home" className="footer-logo">
        Edu<span>Ford</span>
      </a>

      <p>
        Education is the foundation of a brighter future.
        Explore opportunities, learn new skills, and achieve your goals with EduFord.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <a href="#home">Home</a>
      <a href="#about">About Us</a>
      <a href="#courses">Our Courses</a>
      <a href="#contact">Contact Us</a>
    </div>

    <div className="footer-links">
      <h3>Explore</h3>
      <a href="#campus">Our Campus</a>
      <a href="#facilities">Our Facilities</a>
      <a href="#testimonials">Testimonials</a>
    </div>

    <div className="footer-contact">
      <h3>Contact Information</h3>
      <p><span>✉</span> info@eduford.com</p>
      <p><span>☎</span> +92 300 1234567</p>
      <p><span>⌖</span> Karachi, Pakistan</p>
    </div>
  </div>

  <div className="footer-bottom">
    <p>
      © {new Date().getFullYear()} EduFord University.
      All rights reserved.
    </p>

    
  </div>
</footer>



    </>

    

  )
}

export default Website;