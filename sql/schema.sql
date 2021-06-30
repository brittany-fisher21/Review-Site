CREATE TABLE summerwine (
    id serial PRIMARY KEY,
    name text NOT NULL,
    slug text,
    taste text, 
    pairing text, 
    rating integer
);

CREATE TABLE users (
    id serial PRIMARY KEY,
    user_name text NOT NULL,
    user_email text NOT NULL,
    user_password text NOT NULL
);

CREATE TABLE reviews (
    id serial PRIMARY KEY,
    user_id integer REFERENCES users(id),
    wine_id integer REFERENCES summerwine(id),
    reviews text NOT NULL
);