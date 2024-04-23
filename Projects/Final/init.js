//adding final js file for final

db = db.getSiblingDB("eventManagement");



db.createCollection("events", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["event_name", "event_date", "event_time", "venue_id", "organizer_name"],
      properties: {
        event_name: { bsonType: "string", description: "must be a string and is required" },
        event_date: { bsonType: "date", description: "must be a date and is required" },
        event_time: { bsonType: "string", description: "must be a string and is required" },
        venue_id: { bsonType: "int", description: "must be an integer and is required" },
        organizer_name: { bsonType: "string", description: "must be a string and is required" },
        organizer_contact: { bsonType: "string" },
        additional_info: { bsonType: "string" }
      }
    }
  }
});



db.createCollection("attendees", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["attendee_name", "attendee_contact", "rsvp_status"],
      properties: {
        attendee_name: { bsonType: "string", description: "must be a string and is required" },
        attendee_contact: { bsonType: "string", description: "must be a string and is required" },
        rsvp_status: { bsonType: "bool", description: "must be a boolean and is required" },
        additional_info: { bsonType: "string" }
      }
    }
  }
});



db.createCollection("venues", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["venue_name", "venue_address", "venue_capacity"],
      properties: {
        venue_name: { bsonType: "string", description: "must be a string and is required" },
        venue_address: { bsonType: "string", description: "must be a string and is required" },
        venue_capacity: { bsonType: "int", description: "must be an integer and is required" },
        venue_amenities: { bsonType: "string" },
        additional_info: { bsonType: "string" }
      }
    }
  }
});



db.venues.insertMany([
  { venue_name: "Grand Ballroom", 
        venue_address: "123 Main St, Cityville, USA", 
        venue_capacity: 500, 
        venue_amenities: "Sound System, Projector", 
        additional_info: "Beautiful venue for large gatherings." },
  { venue_name: "Garden Terrace", 
        venue_address: "456 Elm St, Townsville, USA", 
        venue_capacity: 200, 
        venue_amenities: "Outdoor seating, Scenic views", 
        additional_info: "Perfect for outdoor events and weddings." },
  { venue_name: "Conference Hall", 
        venue_address: "789 Oak St, Villageton, USA", 
        venue_capacity: 100, 
        venue_amenities: "Conference tables, Whiteboards", 
        additional_info: "Ideal for business conferences and workshops." }
]);



db.attendees.insertMany([
  { attendee_name: "Alice Johnson", 
        attendee_contact: "alice@example.com", 
        rsvp_status: true, 
        additional_info: "VIP guest" },
  { attendee_name: "Bob Smith", 
        attendee_contact: "bob@example.com", 
        rsvp_status: false ,
        additional_info: "Guest" },
  { attendee_name: "Charlie Brown", 
        attendee_contact: "charlie@example.com", 
        rsvp_status: true, 
        additional_info: "Dietary restrictions: Vegetarian" }
]);



db.events.insertMany([
  { event_name: "Annual Gala Dinner", 
        event_date: new Date("2024-03-15"), 
        event_time: "18:00", 
        venue_id: 1, 
        organizer_name: "Event Planning Committee", 
        organizer_contact: "events@example.com", 
        additional_info: "Black-tie event with live entertainment." },
  { event_name: "Tech Conference", 
        event_date: new Date("2024-04-20"), 
        event_time: "09:00", 
        venue_id: 3, 
        organizer_name: "Tech Innovations Inc.", 
        organizer_contact: "info@techconf.com", 
        additional_info: "Featuring keynote speakers and breakout sessions." },
    { event_name: "Charity Fundraiser", 
        event_date: new Date("2024-05-10"), 
        event_time: "17:30", 
        venue_id: 2, 
        organizer_name: "Happy Charity Organization", 
        organizer_contact: "charity@happycharity.com", 
        additional_info: "Raising funds for a good cause." }
]);
