const gameRooms = [];

const addGameRoom = ({ room, game }) => {
  const roomExsist = rooms.find((roomName) => roomName.roomName === roomName);

  if (roomExsist) {
    return;
  }

  const gameRoom = { room, game };
  gameRooms.push(gameRoom);
  return { gameRoom };
}
module.exports = { addGameRoom };