const express = require("express");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();
const PORT = process.env.PORT || 3001;

const carrierDataPath = path.join(__dirname, "/data/carrier-data.json");
const carriers = JSON.parse(fs.readFileSync(carrierDataPath));

const app = express();
app.use(express.json());

app.post("/carrier/distance", (req, res) => {
  const { pickup_postcode, delivery_postcode } = req.body;
  res.status(200).json({
    pickup_postcode,
    delivery_postcode,
    distance_km: 316,
  });
});

app.post("/carrier/price", (req, res) => {
  const { pickup_postcode, delivery_postcode } = req.body;

  const distance_km = 316;
  const price = +(distance_km * 0.2).toFixed(2);

  res.status(200).json({
    pickup_postcode,
    delivery_postcode,
    distance_km,
    price,
  });
});

app.post("/carrier/vehicle-price", (req, res) => {
  const { pickup_postcode, delivery_postcode, vehicle } = req.body;

  const distance_km = 316;
  const base_price = +(distance_km * 0.2).toFixed(2);

  const vehicleMarkup = {
    bicycle: 1.1,
    motorbike: 1.15,
    parcel_car: 1.2,
    small_van: 1.3,
    large_van: 1.4,
  };

  const markup = vehicleMarkup[vehicle] || 1;
  const price = Math.round(base_price * markup);

  res.status(200).json({
    pickup_postcode,
    delivery_postcode,
    vehicle,
    price,
  });
});

app.post("/carrier/base-price", (req, res) => {
  const { pickup_postcode, delivery_postcode, carrier_name } = req.body;

  const carrier = carriers.find((c) => c.carrier_name === carrier_name);

  if (!carrier) {
    return res.status(404).json({
      status: "fail",
      message: "Carrier not found",
    });
  }

  res.status(200).json({
    pickup_postcode,
    delivery_postcode,
    carrier_name,
    price: carrier.base_price,
  });
});

app.post("/carrier/price-list", (req, res) => {
  const { pickup_postcode, delivery_postcode, vehicle } = req.body;

  const vehicleMarkup = {
    bicycle: 1.1,
    motorbike: 1.15,
    parcel_car: 1.2,
    small_van: 1.3,
    large_van: 1.4,
  };

  const markup = vehicleMarkup[vehicle] || 1;

  const price_list = carriers
    .map((carrier) => {
      const service = carrier.services.find((s) =>
        s.vehicles.includes(vehicle)
      );

      if (service) {
        const total_price = Math.round(
          carrier.base_price * (1 + service.markup / 100) * markup
        );
        return {
          service: carrier.carrier_name,
          price: total_price,
          delivery_time: service.delivery_time,
        };
      }
      return null;
    })
    .filter((item) => item !== null)
    .sort((a, b) => a.price - b.price);

  res.status(200).json({
    pickup_postcode,
    delivery_postcode,
    vehicle,
    price_list,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

