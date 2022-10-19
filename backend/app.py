from flask import Flask
from flask_cors import CORS
from controller.routes.halls_route import halls_route
from controller.routes.rooms_route import rooms_route
from controller.routes.coupon_route import coupons_route
from controller.routes.addons_route import addons_route
from controller.routes.booking_room_route import booking_route
from controller.routes.booking_hall_route import booking_hall_route
from controller.routes.reviews_route import reviews_route
# from controller.routes.cancelling_room__route import cancel_route


app = Flask(__name__)
CORS(app)

app.register_blueprint(rooms_route)
app.register_blueprint(halls_route)
app.register_blueprint(coupons_route)
app.register_blueprint(addons_route)
app.register_blueprint(booking_route)
app.register_blueprint(booking_hall_route)
app.register_blueprint(reviews_route)
# app.register_blueprint(cancel_route)


@app.route('/')
def index():

    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)
