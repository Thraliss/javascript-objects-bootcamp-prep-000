var playlist = {robZombie: 'Superbeast'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

<<<<<<< HEAD
/*4. Create a function `removeFromPlaylist` which accepts two arguments (the playlist object and the artist name). The
body of the function should delete the key-value pair from the playlist and return the updated playlist.*/

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  console.log(playlist)
=======
function removeFromPlaylist(playlist, artistName){
  console.log(delete playlist.artistName);
>>>>>>> dd26906800d2608e063b7ddbbebd217c0c8d2097
  return playlist;
}