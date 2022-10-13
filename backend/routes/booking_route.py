from datetime import date
from typing import Any
from flask import jsonify, request,Blueprint

from models.booking import BookingRoom

booking_route = Blueprint('booking_route', __name__)

@booking_route.route('/booking/room',methods=['POST'])
def book_room():
    data : Any = request.get_json()
    print(data)
    BookingRoom(
        booking_id = date.isoformat(date.today()),
        booking_username = data['name'],
        booking_useremail = data['email'],
        booking_date = data['date'],
        booking_check_in = data['checkin'],
        booking_check_out = data['checkout'],
        booking_room_type = data['roomType'],
        booking_room_price = data['roomPrice'],
        booking_no_of_rooms = data['no'],
        booking_addOns = data['selectedAddons'],
        booking_coupon_id = data['couponId'],
        booking_coupon_discount = data['discount'],
        booking_special_request = data['specialReq'],
        booking_total = data['total'],
    ).save()
    return jsonify({"message":"Booking Successful"})
