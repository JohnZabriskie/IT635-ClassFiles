-- Create Event Table
CREATE TABLE Event (
    event_id SERIAL PRIMARY KEY,
    event_name VARCHAR(255),
    event_date DATE,
    event_time TIME,
    venue_id INT REFERENCES Venue(venue_id),
    organizer_name VARCHAR(255),
    organizer_contact VARCHAR(100),
    additional_info TEXT
);

-- Create Attendee Table
CREATE TABLE Attendee (
    attendee_id SERIAL PRIMARY KEY,
    attendee_name VARCHAR(255),
    attendee_contact VARCHAR(100),
    rsvp_status BOOLEAN,
    additional_info TEXT
);

-- Create Venue Table
CREATE TABLE Venue (
    venue_id SERIAL PRIMARY KEY,
    venue_name VARCHAR(255),
    venue_address VARCHAR(255),
    venue_capacity INT,
    venue_amenities TEXT,
    additional_info TEXT
);

-- Insert Sample Data into Venue Table
INSERT INTO Venue (venue_name, venue_address, venue_capacity, venue_amenities, additional_info)
VALUES
    ('Grand Ballroom', '123 Main St, Cityville, USA', 500, 'Sound System, Projector', 'Beautiful venue for large gatherings.'),
    ('Garden Terrace', '456 Elm St, Townsville, USA', 200, 'Outdoor seating, Scenic views', 'Perfect for outdoor events and weddings.'),
    ('Conference Hall', '789 Oak St, Villageton, USA', 100, 'Conference tables, Whiteboards', 'Ideal for business conferences and workshops.');

-- Insert Sample Data into Attendee Table
INSERT INTO Attendee (attendee_name, attendee_contact, rsvp_status, additional_info)
VALUES
    ('Alice Johnson', 'alice@njit.edu', TRUE, 'VIP guest'),
    ('Bob Smith', 'bob@njit.edu', FALSE, NULL),
    ('Charlie Brown', 'charlie@njit.edu', TRUE, 'Dietary restrictions: Vegetarian'),
    ('Diana Miller', 'diana@njit.edu', TRUE, 'Special accommodations required: Wheelchair access'),
    ('Eva Davis', 'eva@njit.edu', FALSE, NULL);

-- Insert Sample Data into Event Table
INSERT INTO Event (event_name, event_date, event_time, venue_id, organizer_name, organizer_contact, additional_info)
VALUES
    ('Annual Gala Dinner', '2024-03-15', '18:00', 1, 'Event Planning Committee', 'events@gala.com', 'Black-tie event with live entertainment.'),
    ('Tech Conference', '2024-04-20', '09:00', 3, 'Tech Innovations Inc.', 'info@techconf.com', 'Featuring keynote speakers and breakout sessions.'),
    ('Charity Fundraiser', '2024-05-10', '17:30', 2, 'Happy Charity Organization', 'charity@happycharity.com', 'Raising funds for a good cause.');
