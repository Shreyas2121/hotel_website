from datetime import date
from sqlite3 import Date
from typing import Any
from flask import jsonify, request, Blueprint
from datetime import datetime
from dateutil import parser
from models.room import Room
import requests, json

from models.booking import BookingRoom

booking_route = Blueprint('booking_route', __name__)




@booking_route.route('/booking/room', methods=['POST'])
def book_room():
    data: Any = request.get_json()
    print(data['checkin'])
    BookingRoom(
        booking_id=date.isoformat(date.today()),
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
    ).save()
    return jsonify({"message": "Booking Successful"})


@booking_route.route('/booking/room', methods=['GET'])
def get_bookings():
    bookings = BookingRoom.objects()
    # return jsonify({'bookings': [ booking.to_json() for booking in bookings]})
    return list(map(lambda x: x.to_json(), bookings))


@booking_route.route('/booking/room/check', methods=['POST'])
def check_booking():
    data: Any = request.get_json()
    print(data)
    checkin = data['checkIn']
    checkout = data['checkOut']
    parsed_check_in = parser.isoparse(checkin)
    parsed_check_out = parser.isoparse(checkout)
    print(parsed_check_in)

    # check =  datetime.isoformat()
    # print(check)

    # booking_obj = BookingRoom.objects(booking_check_in=parsed_check_in)
    booking_obj = BookingRoom.objects(booking_check_in__lte=parsed_check_in, booking_check_out__gte=parsed_check_in)
    booking_data = list(map(lambda x: x.to_json(), booking_obj))

    # room_data = Room.objects();
    # room_data = list(map(lambda x: x.to_json(), room_data))
    # new1  = {}
    res = requests.get('http://127.0.0.1:5000/booking/room/getDetails')

    # idk = json.loads(res.json().get('rooms'))
    # print(json.dumps(idk, indent=4, separators=(',', ': '), sort_keys=True))

    available_rooms = {}
    for each in res.json().get('rooms'):
        available_rooms[each["room_type"]] = each["total_rooms"]
    # print(booking_data)


    new={}
    for i in booking_data:
        for key,value in i.items():
            if key == 'booking_room_type':
                if value in new:
                    new[value] += 1
                else:
                    new[value] = 1
    # print(new)

    # tranverse key value of the dictionary
    for key, value in new.items():
        if key in available_rooms:
            available_rooms[key] -= int(value)
    print(available_rooms)

    # print(str(checkin).split(' ')[0])
    return available_rooms
    # booking = BookingRoom.objects(booking_check_in=data['checkin'],booking_check_out=data['checkout'])
    # if booking:
    #     return jsonify({"message":"Booking Exists"})
    # else:
    #     return jsonify({"message":"Booking Does Not Exist"})
