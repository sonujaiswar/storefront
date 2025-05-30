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
    addressid UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    userid UUID NOT NULL REFERENCES users(userid) ON DELETE CASCADE,
    fullname VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    addresstype VARCHAR(50) NOT NULL DEFAULT 'shipping', -- 'shipping', 'billing', etc.
    addressline1 VARCHAR(255) NOT NULL,
    addressline2 VARCHAR(255),
    city VARCHAR(100) NOT NULL,
    province VARCHAR(100),
    postalcode VARCHAR(20) NOT NULL,
    country VARCHAR(100) NOT NULL,
    landmark VARCHAR(255),
    
    isprimary BOOLEAN DEFAULT FALSE,
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updatedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);
