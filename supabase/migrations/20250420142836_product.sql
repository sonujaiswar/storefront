DROP TABLE IF EXISTS product;
 CREATE TABLE product (
    product_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    product_category VARCHAR(255) NOT NULL,
    product_name VARCHAR(255),
    product_price DECIMAL NOT NULL,
    product_description TEXT,
    product_material VARCHAR(255),
    product_published BOOLEAN NOT NULL DEFAULT FALSE,
    product_created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    product_updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO product (product_category, product_name, product_price, product_description, product_material, product_published) VALUES
('Kurtis', 'Kurti', 500, 'Not well', 'Cotton', true),
('Kurtis', 'Kurti', 900, 'Not well', 'Rayon', true),
('Sarees', 'Saree', 300, 'Not well', 'Gorgette', true);