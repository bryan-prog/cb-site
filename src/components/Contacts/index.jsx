import "./style.css";

const About = () => {
  return (
    <div className="contact">
      <h1>Contact me!</h1>
      <iframe
         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15444.181225883476!2d121.0037907752866!3d14.59649423688004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c9e642e54baf%3A0x17a784c44afb692c!2sSanta%20Mesa%2C%20Manila%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1613816791543!5m2!1sen!2sph" 
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>

      <h4>Phone</h4>
      <p>09984140800</p>

      <h4>Email</h4>
      <p>bryanoliva234@gmail.com</p>

      <h4>Address</h4>
      <p>#1051 Sampaguita St. Brgy.600 Sta.Mesa Manila</p>
    </div>
  );
};

export default About;