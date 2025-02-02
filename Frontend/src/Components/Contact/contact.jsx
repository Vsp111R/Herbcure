import React from "react";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import "./Contact.css"; // Make sure this file is in src/Components/Contact

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch with Us</h2>

      {/* Brief About Services */}
      <section className="contact-section about-us">
        <h3>🌿 About HerbCure</h3>
        <p>
          At HerbCure, we provide premium medicinal plants and herbal products.
          Our goal is to promote <strong>natural healing</strong> with <strong>organic, sustainable</strong> solutions.
          Whether you're looking for Ayurvedic herbs or herbal remedies, we deliver the best nature has to offer.
        </p>
      </section>

      {/* Contact Details */}
      <section className="contact-section contact-info">
        <h3>📞 Contact Information</h3>
        <div className="contact-details">
          <p>
            <Mail className="icon" /> <strong>Official Email:</strong>{" "}
            <a href="mailto:info@herbcure.com">info@herbcure.com</a>
          </p>
          <p>
            <Mail className="icon" /> <strong>Support Email:</strong>{" "}
            <a href="mailto:support@herbcure.com">support@herbcure.com</a>
          </p>
          <p>
            <MapPin className="icon" /> <strong>Address:</strong> 123 Herbal Street, Green Valley, India
          </p>
        </div>
      </section>

      {/* WhatsApp Chat */}
      <section className="contact-section whatsapp-chat">
        <h3>💬 Chat with Us</h3>
        <p>
          Need quick help? Send us a message on WhatsApp, and we will assist you <strong>instantly</strong>.
        </p>
        <a
          href="https://wa.me/9316464837"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <MessageCircle className="icon" /> Chat on WhatsApp
        </a>
      </section>

      {/* AI Assistance */}
      <section className="contact-section ai-assist">
        <h3>🤖 AI Assistance</h3>
        <p>
          Our <strong>AI assistant</strong> is available <strong>24/7</strong> to answer your queries. Click below to start chatting!
        </p>
        <button className="ai-chat-btn">
          Ask Our AI
        </button>
      </section>

      {/* Dummy File for Query Submission */}
      <section className="contact-section query-form">
        <h3>📩 Submit a Query</h3>
        <p>Download the form below, fill it out, and email it to us for faster assistance.</p>
        <a
          href="/files/query-form.pdf"
          download="HerbCure_Query_Form.pdf"
          className="download-btn"
        >
          📄 Download Query Form
        </a>
      </section>
    </div>
  );
};

export default Contact;
