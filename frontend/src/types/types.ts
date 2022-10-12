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
}
