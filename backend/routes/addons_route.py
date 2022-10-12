from flask import jsonify, request,Blueprint

from models.add_on import AddOns

addons_route = Blueprint('addons_route', __name__)

@addons_route.route('/booking/addon/',methods=['GET'])
def get_addons():
    addonObj = AddOns.objects()
    return dict({'addons': [addon.to_json() for addon in addonObj]})["addons"][0]
