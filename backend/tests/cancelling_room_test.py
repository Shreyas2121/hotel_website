import pytest

from models.booking_room import BookingRoom
from controller.actions.cancelling_room_action import cancel_booking, get_bookings_by_email

def test_cancel_booking():
    bookingObj = BookingRoom.objects()
    assert bookingObj is not None

def test_get_booking():
    email = 'test@gmail.com'
    bookings = get_bookings_by_email(email)
    assert bookings is not None