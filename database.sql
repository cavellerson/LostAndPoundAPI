CREATE TABLE pets(
  id SERIAL PRIMARY KEY,
  pet_name VARCHAR(15),
  information TEXT,
  zip_code INT,
  picture_url TEXT,
  date_lost DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
);
