const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/services', (req, res) => {
  const services = [
    {
      serviceId: 'CS-101',
      serviceName: 'Amazon EC2',
      category: 'IaaS',
      pricingModel: 'Pay-As-You-Go / Reserved Instances'
    },
    {
      serviceId: 'CS-102',
      serviceName: 'AWS Lambda',
      category: 'PaaS',
      pricingModel: 'Pay-Per-Request & Compute Duration'
    },
    {
      serviceId: 'CS-103',
      serviceName: 'Amazon S3',
      category: 'IaaS',
      pricingModel: 'Tiered Storage Per GB-Month'
    },
    {
      serviceId: 'CS-104',
      serviceName: 'Google Cloud Run',
      category: 'PaaS',
      pricingModel: 'Pay-Per-Use Container Execution'
    },
    {
      serviceId: 'CS-105',
      serviceName: 'Google Workspace',
      category: 'SaaS',
      pricingModel: 'Monthly Subscription Per User'
    }
  ];

  res.status(200).json(services);
});

app.get('/api/status', (req, res) => {
  res.status(200).json({
    status: 'Operational',
    developer: 'Melroy D Souza',
    environment: 'Cloud PaaS'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
