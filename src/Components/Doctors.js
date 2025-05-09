import React from "react";
import DoctorCard from "./DoctorCard";
import profile1 from "../Assets/profile1.webp";
import profile2 from "../Assets/profile2.webp";
import profile3 from "../Assets/profile3.webp";
import profile4 from "../Assets/profile4.webp";
import "../Styles/Doctors.css";

function Team() {
  return (
    <div className="doctor-section" id="team">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Team</span>
        </h3>

        <p className="dt-description">
          At Bhassi & Dhesi Services, we take pride in our team of experienced professionals who specialize in residential and commercial cleaning, construction, and renovation. Our skilled crew ensures quality, safety, and customer satisfaction in every project we take on.
        </p>
      </div>

      <div className="dt-cards-content">
        <DoctorCard
          img={profile1}
          name="Bhupinder Singh"
          title="Senior Site Supervisor"
          stars="4.9"
          reviews="120+ Projects"
        />
        <DoctorCard
          img={profile2}
          name="Harman Dhesi"
          title="Project Manager"
          stars="4.8"
          reviews="100+ Clients"
        />
        <DoctorCard
          img={profile3}
          name="Simran Kaur"
          title="Cleaning Team Lead"
          stars="4.7"
          reviews="200+ Cleanups"
        />
        <DoctorCard
          img={profile4}
          name="Jasdeep Brar"
          title="Renovation Specialist"
          stars="4.8"
          reviews="90+ Remodels"
        />
      </div>
    </div>
  );
}

export default Team;
