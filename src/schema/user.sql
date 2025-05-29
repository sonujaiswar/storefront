DROP TABLE IF EXISTS users, user_addresses;
CREATE TABLE users (
    userid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100),
    gender VARCHAR(10),
    dob DATE,
    phone VARCHAR(20),
    email VARCHAR(255) UNIQUE NOT NULL,
    isemailverified BOOLEAN DEFAULT FALSE,
    photourl VARCHAR(255),
    uid VARCHAR(255) UNIQUE NOT NULL,
    providerid VARCHAR(50) DEFAULT 'email' NOT NULL,
    password VARCHAR(255),
    language VARCHAR(10),
    currency VARCHAR(10),
    timezone VARCHAR(100),
    country VARCHAR(100),
    subdivision VARCHAR(100),
    city VARCHAR(100),
    postalCode VARCHAR(20),
    createdat VARCHAR(255),
    lastloginat VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    last_login_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP
);
CREATE TABLE user_addresses (
    address_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
    address_type VARCHAR(50) NOT NULL, -- 'shipping', 'billing', etc.
    address_line1 VARCHAR(255) NOT NULL,
    address_line2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    state VARCHAR(100) NOT NULL,
    postal_code VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
