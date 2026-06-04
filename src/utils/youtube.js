export function getYouTubeEmbedUrl(url) {
  if (!url) return ''

  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.hostname.includes('youtu.be')) {
      const videoId = parsedUrl.pathname.replace('/', '')
      return videoId ? `https://www.youtube.com/embed/${videoId}` : ''
    }

    if (parsedUrl.pathname.includes('/shorts/')) {
      const videoId = parsedUrl.pathname.split('/shorts/')[1]?.split('/')[0]
      return videoId ? `https://www.youtube.com/embed/${videoId}` : ''
    }

    if (parsedUrl.pathname.includes('/embed/')) {
      return url
    }

    const videoId = parsedUrl.searchParams.get('v')
    return videoId ? `https://www.youtube.com/embed/${videoId}` : ''
  } catch {
    return ''
  }
}
