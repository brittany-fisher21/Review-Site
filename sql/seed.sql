INSERT INTO summerwine
(name, slug, taste, pairing, rating)
VALUES
('Coopers Hawk Chardonnay', 'ch_chardonnay', 'dry', 'poultry or smoked cheese', 4),

('Coopers Hawk Romance Red', 'ch_romance_red', 'sweet', 'chocolate', 4),

('Coopers Hawk White Sangria', 'ch_wsangria', 'sweet', 'fresh fruit', 5),

('Coopers Hawk White', 'ch_white', 'semi dry', 'shellfish', 5);

INSERT INTO users
(user_email, user_name, user_password)
VALUES
('madison@notreal.com', 'Madison', 'password');

INSERT INTO reviews 
(user_id, wine_id, reviews)
VALUES
(1,  3,  'enjoyable'),
(1, 4,  'i love it');