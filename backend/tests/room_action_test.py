import pytest

from models.room import Room

def test_get_room():
    roomObj = Room.objects()
    assert roomObj is not None

