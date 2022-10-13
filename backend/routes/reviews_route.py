from flask import jsonify, request,Blueprint
from models.review_hotel import Reviews

reviews_route = Blueprint('reviews_route', __name__)


@reviews_route.route('/reviews',methods=['GET'])
def get_reviews():
    review_data = Reviews.objects()  # type: ignore
    return jsonify({'Reviews': [review.to_json() for review in review_data ]})
