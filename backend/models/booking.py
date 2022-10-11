from db_connect import connection_db
from models.room import Room

db = connection_db()

class Booking(db.Document):
    booking_id = db.IntField()
    booking_date = db.DateTimeField()
    booking_check_in = db.DateTimeField()
    booking_check_out = db.DateTimeField()
    booking_room_type = db.StringField()
    booking_room_price = db.DecimalField()
    booking_addOns = db.DictField(field=db.IntField())
    booking_total = db.DecimalField()
    booking_no_of_rooms = db.IntField()

    def to_json(self):
        return {
            "booking_id": self.booking_id,
            "booking_date": self.booking_date,
            "booking_check_in": self.booking_check_in,
            "booking_check_out": self.booking_check_out,
            "booking_room_type": self.booking_room_type,
            "booking_room_price": self.booking_room_price,
            "booking_addOns": self.booking_addOns,
            "booking_total": self.booking_total,
            "booking_no_of_rooms": self.booking_no_of_rooms
        }
