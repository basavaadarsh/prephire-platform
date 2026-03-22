import React from "react";
import ServiceHero from "./ServiceHero";
import ServiceFeatures from "./ServiceFeatures";
import ServiceDetails from "./ServiceDetails";
import ServicePricing from "./ServicePricing";
import ServiceCTA from "./ServiceCTA";

const ServiceTemplate = ({ service }) => {
  return (
    <div className={`service-theme-${service.theme || "blue"}`}>
      <ServiceHero service={service} />
      <ServiceFeatures service={service} />
      <ServiceDetails service={service} />
      <ServicePricing service={service} />
      <ServiceCTA />
    </div>
  );
};

export default ServiceTemplate;
