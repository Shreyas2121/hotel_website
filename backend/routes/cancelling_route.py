from flask import jsonify, request,Blueprint
from typing import Any
from models.booking import BookingRoom

cancel_route = Blueprint('cancel_route', __name__)

@cancel_route.route('/reservation/<string:id>',methods=['DELETE'])
def cancel_booking(id):
    try:
        BookingRoom.objects(booking_useremail=id).delete()
        return jsonify({"message":"Booking Cancelled"})
    except Exception:
        return jsonify({"message":"Booking Not Found"})


@cancel_route.route('/reservation/<string:email>',methods=['GET'])
def cancel_bookings(email):
    print(email)
    bookings = BookingRoom.objects().filter(booking_useremail=email)

    return list(map(lambda x: x.to_json(), bookings))
