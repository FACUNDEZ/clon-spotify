import { allPlaylists, songs as allSongs} from "@/lib/data"

export async function GET({request, response}) {
  const { url } = request
  const urlObject = new URL(url)
  const id = urlObject.searchParams.get('id')

  const playlist = allPlaylists.find(playlist => id === playlist.id)
  const songs = allSongs.filter(song => song.albumId === playlist.albumId )

  return new Response(JSON.stringify( { playlist, songs }))
}