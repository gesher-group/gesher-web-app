import React from "react";
import Menu from "../Menu/Menu";

import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <div className="Services">
      <h1> Our Services </h1>
      <div className="services-box">
        <div className="service-flex-item">
          <h3>Business Development</h3>
          <p>
            Create market strategies, conduct extensive overviews and analyze growth opportunities.
          </p>
        </div>
        <div className="service-flex-item">
          <h3>Digital Marketing</h3>
          <p>
            Market products and services using digital channels to reach customers and promotion through social medias.
          </p>
        </div>
        <div className="service-flex-item">
          <h3>Software Development</h3>
          <p>
            Develop software applications, websites, and user interfaces to simplify interactions between members.
          </p>
        </div>
      </div>
      <br /> <br /> <br />

      <h1> Past Clients </h1>
      <div className="testimonies-box">
        <div className="testimony-flex-item">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet tincidunt commodo. Aenean sit amet est erat. Mauris tincidunt nibh sed aliquam congue. Curabitur vehicula, ligula in ultrices vestibulum, eros urna pulvinar massa, vel mattis nibh sapien vel tortor. Sed in sem sed turpis dictum scelerisque. Donec finibus risus vitae elit eleifend efficitur. Fusce sollicitudin vitae erat eget cursus. Vestibulum hendrerit nulla id dolor pulvinar, id luctus metus viverra."
          </p>
        </div>
        <div className="testimony-flex-item">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet tincidunt commodo. Aenean sit amet est erat. Mauris tincidunt nibh sed aliquam congue. Curabitur vehicula, ligula in ultrices vestibulum, eros urna pulvinar massa, vel mattis nibh sapien vel tortor. Sed in sem sed turpis dictum scelerisque."
          </p>
        </div>
        <div className="testimony-flex-item">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet tincidunt commodo. Aenean sit amet est erat. Mauris tincidunt nibh sed aliquam congue. Curabitur vehicula, ligula in ultrices vestibulum, eros urna pulvinar massa, vel mattis nibh sapien vel tortor. Sed in sem sed turpis dictum scelerisque. Donec finibus risus vitae elit eleifend efficitur. Fusce sollicitudin vitae erat eget cursus. Vestibulum hendrerit nulla id dolor pulvinar, id luctus metus viverra. Nullam scelerisque sem ut magna scelerisque, vel tincidunt diam condimentum. Aenean mollis odio augue, ut molestie turpis iaculis vel."
          </p>
        </div>
      </div>

      <RedButton buttonName="Contact us" size="medium"/>
      <br /> <br /> <br /><br /> <br /> <br />
    </div>
  );
};

export default ServicesPage;
