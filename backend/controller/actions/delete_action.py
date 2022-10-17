from flask import jsonify, request
from typing import Any
from models.booking import BookingRoom

def cancel_booking(id):
    try:
        BookingRoom.objects(_id=id).delete()
        return jsonify({"message":"Booking Cancelled"})
    except Exception:
        return jsonify({"message":"Booking Not Found"})


def get_bookings_by_email(email):
    bookings = BookingRoom.objects().filter(booking_useremail=email)

    return list(map(lambda x: x.to_json(), bookings))
