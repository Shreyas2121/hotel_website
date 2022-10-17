from flask import jsonify, request
from typing import Any
from models.booking import BookingRoom

def cancel_booking(id):
    try:
        BookingRoom.objects(booking_useremail=id).delete()
        return jsonify({"message":"Booking Cancelled"})
    except Exception:
        return jsonify({"message":"Booking Not Found"})


def cancel_bookings(email):
    bookings = BookingRoom.objects().filter(booking_useremail=email)

    return list(map(lambda x: x.to_json(), bookings))
