CREATE TABLE pets(
  id SERIAL PRIMARY KEY,
  pet_name VARCHAR(15),
  pet_type VARCHAR(3),
  information TEXT,
  zip_code INT,
  picture_url TEXT,
  date_lost DATE,
  pet_size INT,
  phone_number TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
