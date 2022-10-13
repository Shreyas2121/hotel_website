from flask import jsonify, request,Blueprint

from models.add_on import AddOns

addons_route = Blueprint('addons_route', __name__)

@addons_route.route('/booking/addon/',methods=['GET'])
def get_addons():
    addonObj = AddOns.objects()
    return  list(map(lambda x: x.to_json(), addonObj))[0]
