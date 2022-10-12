from flask import jsonify, request,Blueprint
from models.room import Room

rooms_route = Blueprint('rooms_route', __name__)


@rooms_route.route('/booking/room/getDetails',methods=['GET'])
def get_rooms():
    rooms = Room.objects()  # type: ignore
    return jsonify({'rooms': [room.to_json() for room in rooms]})
