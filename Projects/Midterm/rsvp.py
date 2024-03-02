import psycopg2

conn = psycopg2.connect("postgresql://event_admin:njit@localhost/eventadmin")
cur = conn.cursor()

while True:
    print("Please enter attendee's Full Name")
    attendee_name = input()
    print("Please enter attendee's email")
    attendee_contact = input()
    print("Please enter food accomidations:")
    additional_info = input()
    cur.execute("""
        INSERT INTO attendee (attendee_name, attendee_contact, rsvp_status, additional_info)
        VALUES (%s, %s, TRUE, %s)
        RETURNING attendee_id;
    """, (attendee_name, attendee_contact, additional_info));
    attendee_id = cur.fetchone()[0]
    print(f"Attendee information: ID {attendee_id}")
    conn.commit()

cur.close()
conn.close()