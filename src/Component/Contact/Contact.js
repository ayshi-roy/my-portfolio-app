import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const Contact = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    },[])

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_cqtla3h', e.target, 'user_dDkq3YTfKe1xIRlCbo3Br')
          .then((result) => {
              if(result){
                  alert('Your message send successfully');
              }
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }

    return (
        <section className="contact section" id="contact">
                <h2 className="section-title">Contact</h2>

                <div className="contact_container bd-grid">
                    <form action="" className="contact_form" onSubmit={sendEmail}>
                        <input type="text" name="name" placeholder="name" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="contact_input"></input>
                        <input type="email" name="email" placeholder="email" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="contact_input"></input>
                        <textarea name="message" placeholder="Message" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="contact_input" id="" cols="0" rows="10"></textarea>
                        <input type="submit" value="Send" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1500" className="contact_button"></input> 
                    </form>
                </div>
        </section>
    );
};

export default Contact;