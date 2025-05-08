import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer, toast } from "react-toastify";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [serviceType, setServiceType] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [location, setLocation] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!clientName.trim()) {
      errors.clientName = "Full name is required";
    } else if (clientName.trim().length < 5) {
      errors.clientName = "Full name must be at least 5 characters";
    }

    if (!clientPhone.trim()) {
      errors.clientPhone = "Phone number is required";
    } else if (clientPhone.trim().length !== 10) {
      errors.clientPhone = "Phone number must be 10 digits";
    }

    if (serviceType === "default") {
      errors.serviceType = "Please select a service";
    }

    if (!appointmentTime) {
      errors.appointmentTime = "Preferred date and time is required";
    } else {
      const selectedTime = new Date(appointmentTime).getTime();
      const currentTime = new Date().getTime();
      if (selectedTime <= currentTime) {
        errors.appointmentTime = "Please choose a future time";
      }
    }

    if (!location.trim()) {
      errors.location = "Service location is required";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setClientName("");
    setClientPhone("");
    setServiceType("default");
    setAppointmentTime("");
    setLocation("");
    setFormErrors({});

    toast.success("Service Request Submitted!", {
      position: toast.POSITION.TOP_CENTER,
      onOpen: () => setIsSubmitted(true),
      onClose: () => setIsSubmitted(false),
    });
  };

  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Bhassi <span className="legal-siteSign">&</span> Dhesi Services
        </Link>
      </h1>

      <div className="form-container">
        <h2 className="form-title">
          <span>Request a Service</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            />
            {formErrors.clientName && <p className="error-message">{formErrors.clientName}</p>}
          </label>

          <label>
            Phone Number:
            <input
              type="text"
              value={clientPhone}
              onChange={(e) => setClientPhone(e.target.value)}
              required
            />
            {formErrors.clientPhone && <p className="error-message">{formErrors.clientPhone}</p>}
          </label>

          <label>
            Type of Service:
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="cleaning">Post-Construction Cleaning</option>
              <option value="renovation">Interior Renovation</option>
              <option value="general">General Contracting</option>
              <option value="commercial">Commercial Cleaning</option>
              <option value="other">Other</option>
            </select>
            {formErrors.serviceType && <p className="error-message">{formErrors.serviceType}</p>}
          </label>

          <label>
            Preferred Date & Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              required
            />
            {formErrors.appointmentTime && <p className="error-message">{formErrors.appointmentTime}</p>}
          </label>

          <label>
            Service Location:
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            {formErrors.location && <p className="error-message">{formErrors.location}</p>}
          </label>

          <button type="submit" className="text-appointment-btn">
            Submit Request
          </button>

          <p className="success-message" style={{ display: isSubmitted ? "block" : "none" }}>
            Your service request has been received. We'll contact you shortly!
          </p>
        </form>
      </div>

      <div className="legal-footer">
        <p>© {new Date().getFullYear()} Bhassi & Dhesi Services. All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />
    </div>
  );
}

export default AppointmentForm;
