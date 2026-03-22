import React from "react";
import { useParams } from "react-router-dom";
import { servicesData } from "../../data/ServicesData";
import ServiceTemplate from "../../components/services/ServiceTemplate";

const ServiceDetail = () => {
  const { serviceId } = useParams();

  const service = servicesData.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <div className="container py-5 text-center">
        <h2 className="fw-bold mb-3">Service not found</h2>
        <p className="text-muted">
          The requested service page could not be loaded.
        </p>
      </div>
    );
  }

  return <ServiceTemplate service={service} />;
};

export default ServiceDetail;
