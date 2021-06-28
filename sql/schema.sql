CREATE TABLE summerwine (
    id serial PRIMARY KEY,
    name text NOT NULL,
    slug text,
    taste text, 
    pairing text, 
    rating integer
);