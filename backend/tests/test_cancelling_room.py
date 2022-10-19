import json
import pytest
from app import app

from models.booking_room import BookingRoom
from controller.actions.cancelling_room_action import cancel_booking, get_bookings_by_email

# def test_cancel_booking():
#     bookingObj = BookingRoom.objects()
#     assert bookingObj is not None
#     res = app.test_client().delete('/reservation/5f9f1b1b1b1b1b1b1b1b1b1b')
#     assert res.status_code == 200
def test_get_booking_email():
    response = app.test_client().get('/reservation/get/test@gmail.com')
    res = json.loads(response.data.decode('utf-8'))[0].get('booking_useremail')
    assert res == 'test@gmail.com'
    assert response.status_code == 200


    

def test_get_booking():
    email = 'test@gmail.com'
    bookings = get_bookings_by_email(email)
    assert bookings is not None