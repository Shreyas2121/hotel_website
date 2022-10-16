from flask import Blueprint

from controller.actions.delete_action import cancel_booking,cancel_bookings

cancel_route = Blueprint('cancel_route', __name__)

@cancel_route.route('/reservation/<string:id>',methods=['DELETE'])
def cancel(id):
    return cancel_booking(id)


@cancel_route.route('/reservation/<string:email>',methods=['GET'])
def get(email):
    return cancel_bookings(email)
