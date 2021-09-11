import styled from 'styled-components'
import { getYoutubeIdByUrl } from '../../utils/get-youtube-url'

const VideoResponsiveContainer = styled.div`
  padding-top: 56.25%;
  position: relative;
  height: 0;
  iframe,
  object,
  video {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
`

function VideoBlock({ data }) {
  const { external } = data
  if (external.url) {
    const id = getYoutubeIdByUrl(external.url)
    return (
      <VideoResponsiveContainer>
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </VideoResponsiveContainer>
    )
  }
  return (
    <div>
      video sin procesar en frontend
    </div>
  )
}

export default VideoBlock
