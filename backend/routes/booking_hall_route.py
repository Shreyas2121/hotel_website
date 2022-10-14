from datetime import date
from typing import Any
from flask import jsonify, request,Blueprint

from models.booking_hall import BookingHall

booking_hall_route = Blueprint('booking_hall_route', __name__)

@booking_hall_route.route('/booking/hall',methods=['POST'])
def book_room():
    data : Any = request.get_json()
    print(data)
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

@booking_hall_route.route('/booking/hall/check',methods=['POST'])
def get_bookings():
    bookings = BookingHall.objects(booking_date=request.get_json()['date'])
    print(list(map(lambda x: x.booking_hall_type, bookings)))
    return list(map(lambda x: x.booking_hall_type, bookings))
