export const getHomeContent = (_req, res) => {
  res.json({
    hero: {
      title: 'SolarOne Energy',
      subtitle: 'Full-stack solar solutions with live monitoring'
    },
    whySolar: [
      { title: 'Lower bills', copy: 'Cut utility costs up to 70% with high yield modules.' },
      { title: 'Trackable impact', copy: 'Carbon dashboards, PDF reporting and ESG ready data.' },
      { title: '24/7 monitoring', copy: 'IoT edge devices stream data every minute with alerts.' }
    ],
    features: ['Financing', 'Certified installers', 'Weather API', 'EV ready']
  });
};

export const getAboutContent = (_req, res) => {
  res.json({
    mission: 'Accelerate decarbonisation with transparent solar deployments.',
    certifications: ['MNRE Channel Partner', 'ISO 9001/27001', 'TUV audited BOM'],
    team: ['PV Engineers', 'Data Scientists', 'NOC Support']
  });
};

export const getServicesContent = (_req, res) => {
  res.json({
    services: ['Rooftop', 'Solar Water Heater', 'Solar Pump', 'EV Charger Setup']
  });
};

