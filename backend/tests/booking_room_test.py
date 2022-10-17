import pytest

from models.booking import BookingRoom

def test_get_booking():
    bookingObj = BookingRoom.objects()
    assert bookingObj is not None

def test_check_booking():
    booking_res = ""
    for booking in BookingRoom.objects():
        print(booking)
