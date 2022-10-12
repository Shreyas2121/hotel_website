from flask import jsonify, request,Blueprint
from models.hall import Hall

halls_route = Blueprint('halls_route', __name__)


@halls_route.route('/booking/hall/post',methods=['GET'])
def create_hall():
    hall = Hall(
        hall_id = 2,
        hall_type = "Conference Hall",
        hall_price = 20000,
        hall_max_occ = 50,
        hall_desc = "This is a conference hall",
        hall_amenities = ["AC","TV","Projector"],
        total_halls = 2,
        hall_image = "https://media.istockphoto.com/photos/conference-room-with-a-long-table-and-lots-of-chairs-picture-id98395721?k=20&m=98395721&s=612x612&w=0&h=aLPhhimrM4OYCsoFiK2EbMQqgKvNVSkPBl1M9Od0BYc="

    )
    hall.save()
    return jsonify({'hall': hall.to_json()})
