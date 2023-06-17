export function getGames() {
  fetch(
    "https://api.boardgameatlas.com/api/search?ids=TAAifFP590&client_id=jyTTdnsRAJ"
  ).then((reaponse) => reaponse.json());
}
