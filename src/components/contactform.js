import emailjs from "emailjs-com";
<head>
  <title>Contact Us - KLE College of Engineering and Technology, Chikodi</title>
</head>
const Mailer = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_sokqvmv",
      "template_i2fcofk",
      e.target,
      "user_l3wDnkbJVHUCFogrydhjs"
    ).then(res=>{
        console.log(res);
    }).catch(err=> console.log(err));
  }
  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <meta charset="UTF-8"></meta>
      <title>Contact Us - KLE College of Engineering and Technology, Chikodi</title>
      <h1>KLE College of Engineering and Technology,Chikodi</h1>
      <h2>Connect With Us</h2>
      <p>We would love to respond to your queries and help you suceed.
            Feel Free to get in touch wit us.</p>
      <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>Name</label>
        <input type="text" name="name" className="form-control" placeholder="ABCD XYZ" />

        <label>Contact</label>
        <input type="contact" name="Contact" className="form-control" placeholder="+91 1234567890" />

        <label>Email</label>
        <input type="email" name="user_email" className="form-control" placeholder="ABCD@xyz.com"/>

        <label>Message</label>
        <textarea name="message" rows="4" className="form-control" placeholder="Type Your Message" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};

export default Mailer