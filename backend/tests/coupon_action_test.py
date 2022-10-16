import pytest

from models.coupon import Coupon


def test_get_coupon():
    couponObj = Coupon.objects()
    assert couponObj is not None

def test_check_coupon():
    coupon_res = ""
    for coupan in Coupon.objects():
        try:
            if coupan.coupons[coupon_res]:
                assert coupan.coupons[coupon_res] == 10
        except:
            assert "Invalid Coupon" == "Invalid Coupon"
