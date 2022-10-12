from flask import Flask,jsonify
from flask_cors import CORS
from db_connect import connection_db
from models.room import Room
from models.add_on import AddOns
from routes.rooms_route import rooms_route
from routes.halls_route import halls_route
from routes.coupon_route import coupons_route



app = Flask(__name__)
app.register_blueprint(rooms_route)
app.register_blueprint(halls_route)
app.register_blueprint(coupons_route)
CORS(app)



@app.route('/')
def index():


    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)
