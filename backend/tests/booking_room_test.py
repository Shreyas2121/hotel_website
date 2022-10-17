import pytest

from models.booking import BookingRoom
from controller.actions.booking_room_action import book_room, get_bookings

def test_booking():
    bookingObj = BookingRoom.objects()
    assert bookingObj is not None

def test_get_booking():
    bookings = get_bookings()
    assert bookings is not None
