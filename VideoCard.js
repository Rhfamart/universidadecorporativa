export default function VideoCard({video}){
  return (
    <article className="videoCard">
      <img src={video.thumb} alt={video.title} className="thumb" />
      <div className="meta">
        <h3>{video.title}</h3>
        <div className="info">{video.author} • {video.duration}</div>
        <div className="actions">
          <button className="btn small">Assistir</button>
          <button className="btn outline small">Quiz</button>
        </div>
      </div>
    </article>
  )
}