from flask import Flask,jsonify
from flask_cors import CORS
from db_connect import connection_db
from models.room import Room
from models.add_on import AddOns

app = Flask(__name__)
CORS(app)

# db = connection_db()


@app.route('/')
def index():
#    fetch data from room collection
    rooms = Room.objects()
    room_list = []
    for room in rooms:
        room_list.append(room.to_json())
    print(room_list)
    return room_list



if __name__ == '__main__':
    app.run(debug=True)
