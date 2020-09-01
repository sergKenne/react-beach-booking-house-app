
class Storage {
  static setRoomsStorage(rooms) {
    localStorage.setItem('rooms', JSON.stringify(rooms));
  }

  static getRoomsStorage() {
    return JSON.parse(localStorage.getItem('rooms'));
  }


  static setRoomStorage(room) {
    localStorage.setItem("room", JSON.stringify(room));
  }

  static getRoomStorage() {
    return JSON.parse(localStorage.getItem('room'));
  }
}

export default Storage;