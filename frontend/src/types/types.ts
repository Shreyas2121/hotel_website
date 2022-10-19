export interface Room {
  room_id: number;
  room_amenties: string[];
  room_type: string;
  room_price: number;
  room_desc: string;
  room_images: {
    bathroom: string;
    bedroom: string;
    living_room: string;
  };
  total_rooms: number;
  room_max_occ: number;
  room_area: string;
}

export interface Hall {
  hall_id: number;
  hall_type: string;
  hall_price: number;
  hall_max_occ: number;
  hall_desc: string;
  hall_image: string[];
  total_halls: number;
  hall_amenties: string[];
}

export interface Addon {
  Breakfast: number;
  Brunch: number;
  Extra_bed: number;
  Swimming_pool: number;
  bar: number;
  dinner: number;
  gym: number;
  lunch: number;
  spa: number;
}

export interface Review {
  name: string;
  email: string;
  reviews: string;
  rating: number;
}

export interface Booking {
  _id: string;
  booking_date: string;
  booking_check_in: string;
  booking_check_out: string;
  booking_total: string;
  booking_addOns: Addon;
  booking_coupon_id: string;
  booking_coupon_discount: string;
  booking_no_of_rooms: number;
  booking_room_price: string;
  booking_room_type: string;
  booking_special_request: string;
  booking_useremail: string;
  booking_username: string;
}
