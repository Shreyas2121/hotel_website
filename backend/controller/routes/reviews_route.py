from flask import Blueprint

from controller.actions.reviews_action import get_reviews,add_reviews

reviews_route = Blueprint('reviews_route', __name__)


@reviews_route.route('/reviews',methods=['GET'])
def get():
    return get_reviews()

@reviews_route.route('/reviews',methods=['POST'])
def add():
    return add_reviews()
