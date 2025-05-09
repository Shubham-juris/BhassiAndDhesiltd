import React from "react";
import InformationCard from "./InformationCard";
import {
  faBroom,
  faHammer,
  faPeopleCarryBox
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Our Services</span>
        </h3>
        <p className="info-description">
          At Bhassi & Dhesi Services, we specialize in reliable cleaning and construction solutions.
          From everyday cleaning to complex renovations, we bring quality, trust, and a personal touch to every project.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Residential & Commercial Cleaning"
          description="Our expert team ensures your spaces are spotless and hygienic. Whether it’s home, office, or retail, we use eco-friendly methods to deliver top-tier cleaning tailored to your needs."
          icon={faBroom}
        />

        <InformationCard
          title="Renovation & Repairs"
          description="Need a kitchen makeover or structural repair? We provide skilled construction and renovation services that breathe new life into your property with precision and professionalism."
          icon={faHammer}
        />

        <InformationCard
          title="Post-Construction Cleanup"
          description="After the build, we handle the mess. Our post-construction cleaning service removes debris, dust, and leftover materials, making your newly completed space ready to use."
          icon={faPeopleCarryBox}
        />
      </div>
    </div>
  );
}

export default Info;
