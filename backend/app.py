from flask import Flask,jsonify
from flask_cors import CORS
from db_connect import connection_db
from models.room import Room
from models.add_on import AddOns
from routes.rooms_route import rooms_route



app = Flask(__name__)
app.register_blueprint(rooms_route)
CORS(app)



@app.route('/')
def index():
    return "Hello World"

if __name__ == '__main__':
    app.run(debug=True)
