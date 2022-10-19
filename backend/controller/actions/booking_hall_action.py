from datetime import date
from typing import Any
from flask import jsonify, request
from dateutil import parser

from models.booking_hall import BookingHall

def book_hall():
    data : Any = request.get_json()
    BookingHall(
        booking_username = data['name'],
        booking_useremail = data['email'],
        booking_date = data['date'],
        booking_check_in = data['checkin'],
        booking_hall_type = data['roomType'],
        booking_hall_price = data['roomPrice'],
        booking_addOns = data['selectedAddons'],
        booking_coupon_id = data['couponId'],
        booking_coupon_discount = data['discount'],
        booking_special_request = data['specialReq'],
        booking_total = data['total'],
    ).save()
    return jsonify({"message":"Booking Successful"})

def check_bookings():
    checkin = request.get_json()['checkin']
    parsed_check_in = parser.isoparse(checkin)
    bookings = BookingHall.objects(booking_check_in=parsed_check_in)
    return list(map(lambda x: x.booking_hall_type, bookings))
