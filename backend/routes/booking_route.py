from flask import jsonify, request,Blueprint

from models.booking import BookingRoom

booking_route = Blueprint('booking_route', __name__)

@booking_route.route('/booking/room/',methods=['POST'])
def book_room():
    print(request.get_json())

    return "Hello World"
