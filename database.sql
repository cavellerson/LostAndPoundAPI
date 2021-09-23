CREATE TABLE pets(
  id SERIAL PRIMARY KEY,
  pet_type VARCHAR(3),
  pet_name VARCHAR(15),
  zip_code INT,
  coat_color TEXT,
  eye_color TEXT,
  sex TEXT,
  misc TEXT,
  picture_url TEXT,
  date_lost DATE,
  pet_size INT,
  age TEXT,
  phone_number TEXT,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
