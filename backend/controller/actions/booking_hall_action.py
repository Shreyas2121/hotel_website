from datetime import date
from typing import Any
from flask import jsonify, request

from models.booking_hall import BookingHall

def book_room():
    data : Any = request.get_json()
    BookingHall(
        booking_id = date.isoformat(date.today()),
        booking_username = data['name'],
        booking_useremail = data['email'],
        booking_date = data['date'],
        booking_hall_type = data['hallType'],
        booking_hall_price = data['hallPrice'],
        booking_addOns = data['selectedAddons'],
        booking_coupon_id = data['couponId'],
        booking_coupon_discount = data['discount'],
        booking_special_request = data['specialReq'],
        booking_total = data['total'],
    ).save()
    return jsonify({"message":"Booking Successful"})

def get_bookings():
    bookings = BookingHall.objects(booking_date=request.get_json()['date'])
    return list(map(lambda x: x.booking_hall_type, bookings))
