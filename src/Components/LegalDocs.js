import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Bhassi<span className="legal-siteSign">&Dhesiservices</span>
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">General Info</p>
        <p className="legal-description">
          Welcome to Clean&Build, your reliable partner in professional cleaning and construction services.
          We are committed to delivering high-quality home improvement, renovation, and cleaning solutions.
          By using our website, you agree to the policies and procedures outlined below.
        </p>

        <p className="legal-title">Privacy Policy</p>
        <p className="legal-description">
          We take your privacy seriously. Our Privacy Policy describes how we collect, use, and store your personal information 
          (such as name, contact details, address, and project information). Your data will never be shared with third parties 
          without consent, and all communications are encrypted for your protection.
        </p>

        <p className="legal-title">Terms of Service</p>
        <p className="legal-description">
          By scheduling a service or interacting with our team, you agree to follow the Terms of Service. This includes payment terms, 
          cancellation policies, and expectations around safety and job site access. Both clients and service providers must communicate 
          clearly to ensure a successful outcome.
        </p>

        <p className="legal-title">Service Bookings</p>
        <p className="legal-description">
          When booking a cleaning or construction service, please provide accurate information about the scope of work. 
          Our team will review your request and confirm availability. Quotes are based on job complexity, materials, and required labor. 
          Final costs may vary based on site conditions.
        </p>

        <p className="legal-title">How it Works</p>
        <p className="legal-description">
          Select your desired service (cleaning, renovation, or maintenance), choose a preferred date, and complete our brief booking form. 
          A project coordinator will contact you to confirm details and dispatch the appropriate team. For ongoing or large-scale projects, 
          we provide regular progress updates and site supervision.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2013-2025 Clean&Build. All rights reserved.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
