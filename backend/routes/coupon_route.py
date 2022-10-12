from typing import Dict
from flask import jsonify, request,Blueprint

from models.coupon import Coupon

coupons_route = Blueprint('coupons_route', __name__)

# @coupons_route.route('/booking/coupon/get',methods=['GET'])
# def get_coupons():
#     couponObj = Coupon.objects() # type: ignore
#     return jsonify({'coupons': [coupon.to_json() for coupon in couponObj]})

@coupons_route.route('/booking/coupon/',methods=['POST'])
def check_coupon():
    coupon_res = request.get_json()['coupon']
    print(coupon_res)

    for coupan in Coupon.objects():
        try:
            if coupan.coupons[coupon_res]:
                return str(coupan.coupons[coupon_res])
        except:
            return("Invalid Coupon")
    return "Hello"
