from datetime import date
from typing import Any
from flask import jsonify, request
from datetime import datetime
from dateutil import parser
import requests

from models.booking import BookingRoom


def book_room():
    data: Any = request.get_json()
    booking_obj = BookingRoom(
        booking_username=data['name'],
        booking_useremail=data['email'],
        booking_date=data['date'],
        booking_check_in=data['checkin'],
        booking_check_out=data['checkout'],
        booking_room_type=data['roomType'],
        booking_room_price=data['roomPrice'],
        booking_no_of_rooms=data['no'],
        booking_addOns=data['selectedAddons'],
        booking_coupon_id=data['couponId'],
        booking_coupon_discount=data['discount'],
        booking_special_request=data['specialReq'],
        booking_total=data['total'],
    )
    booking_obj.save()
    return jsonify({"message": "Booking Successful",})

def get_bookings():

    bookings = BookingRoom.objects()
    print(bookings)
    # return jsonify({'bookings': [ booking.to_json() for booking in bookings]})
    return list(map(lambda x: x.to_json(), bookings))


def check_booking():
    data: Any = request.get_json()
    checkin = data['checkIn']
    checkout = data['checkOut']
    parsed_check_in = parser.isoparse(checkin)
    parsed_check_out = parser.isoparse(checkout)

    booking_obj = BookingRoom.objects(booking_check_in__lte=parsed_check_in, booking_check_out__gte=parsed_check_in,)
    booking_data = list(map(lambda x: x.to_json(), booking_obj))

    res = requests.get('http://127.0.0.1:5000/booking/room/getDetails')

    available_rooms = {}
    for each in res.json().get('rooms'):
        available_rooms[each["room_type"]] = each["total_rooms"]

    new={}
    for i in booking_data:
        for key,value in i.items():
            if key == 'booking_room_type':
                if value in new:
                    new[value] += 1
                else:
                    new[value] = 1

    for key, value in new.items():
        if key in available_rooms:
            available_rooms[key] -= int(value)
    print(available_rooms)

    return available_rooms
