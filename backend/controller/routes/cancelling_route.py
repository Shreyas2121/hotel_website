from flask import Blueprint

from controller.actions.delete_action import cancel_booking,get_bookings_by_email

cancel_route = Blueprint('cancel_route', __name__)

@cancel_route.route('/reservation/<string:id>',methods=['DELETE'])
def cancel(id):
    return cancel_booking(id)


@cancel_route.route('/reservation/get/<string:email>',methods=['GET'])
def get(email):
    return get_bookings_by_email(email)
