import { BsSend } from "react-icons/bs";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  //All input values are storned in this single state object (formData)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  //Handles changes for all input fields dynamically based on the name attribute of the input element
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Set loading to true before making the API request
      setLoading(true);

      //Axios API Request
      await axios.post(
        "https://us-central1-amy-api-1467c.cloudfunctions.net/api/simply-sweet-contact-form",
        formData
      );

      // Simulate an error by making a request to a non-existent endpoint:
      // await axios.post("https://example.com/nonexistent-endpoint", formData);

      // Toast success message
      toast.success("Your message has been sent successfully!");

      // Reset formData and loading state after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      //Handle errors
      toast.error(
        "We're sorry, your message could not be sent at this time.",
        error
      );
    } finally {
      //Set the loading state back to false after handling the request
      setLoading(false);
    }
  };

  return (
    <section id="contact-section" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div
            className="contact-img-container"
            role="img"
            aria-label="Send Message Image"
          ></div>
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="contact-elements">
              <div className="name-elements">
                <div className="contact-element-wrapper">
                  <label for="first-name">First Name</label>
                  <input
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="First"
                    required
                    onChange={handleChange}
                    value={formData.firstName}
                  ></input>
                </div>

                {/* Last Name */}
                <div className="contact-element-wrapper">
                  <label for="last-name">Last Name</label>
                  <input
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder="Last"
                    required
                    onChange={handleChange}
                    value={formData.lastName}
                  ></input>
                </div>
              </div>

              {/* Email */}
              <div className="contact-element-wrapper">
                <label for="email">Email</label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="email@123.com"
                  required
                  onChange={handleChange}
                  value={formData.email}
                ></input>
              </div>

              {/* Subject */}
              <div className="contact-element-wrapper">
                <label for="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  onChange={handleChange}
                  value={formData.subject}
                ></input>
              </div>

              {/* Message */}
              <div className="contact-element-wrapper">
                <label for="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="8"
                  maxlength="3000"
                  placeholder="Type your message here"
                  required
                  onChange={handleChange}
                  value={formData.message}
                ></textarea>
              </div>

              {/* Send Message Button */}
              <div className="submit-btn-container">
                <button
                  type="submit"
                  className="flex items-center justify-center gap-4 rounded-md bg-[#faa2c1] px-8 py-2 font-semibold text-white text-[12px] uppercase tracking-[1.5px] shadow-sm hover:bg-[#f783ac] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f783ac] hover:scale-105 transition-transform duration-3000"
                  disabled={loading} //Disable the button when loading is true
                >
                  {loading ? "Sending..." : "Send Message"}
                  <BsSend id="send-icon" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
