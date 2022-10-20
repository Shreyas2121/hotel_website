import json
import pytest
from app import app


def test_get_booking_email():
    response = app.test_client().get('/reservation/get/test2@test.com')
    res = json.loads(response.data.decode('utf-8'))
    assert res[0]['booking_useremail'] == 'test2@test.com'
    assert response.status_code == 200
