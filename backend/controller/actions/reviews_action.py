from flask import jsonify, request
from models.review_hotel import Reviews


def get_reviews():
    review_data = Reviews.objects()  # type: ignore
    return jsonify({'Reviews': [review.to_json() for review in review_data ]})


def add_reviews():
    data = request.get_json()
    Reviews(
        name = data['name'],
        email = data['email'],
        reviews = data['reviews'],
        rating = data['rating'],
    ).save()
    return jsonify({"message":"Review Added"})
