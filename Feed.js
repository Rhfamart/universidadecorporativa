import VideoCard from './VideoCard'
const videos = [
  {id:1, title:'Segurança: checklist rápido', duration:'2:10', author:'Ronaldo', thumb:'/assets/thumb1.png'},
  {id:2, title:'Como preencher nota fiscal', duration:'1:50', author:'Suellen', thumb:'/assets/thumb2.png'},
  {id:3, title:'Atendimento ao cliente — 3 passos', duration:'2:30', author:'Matheus', thumb:'/assets/thumb3.png'}
]
export default function Feed(){
  return (
    <section className="feed">
      {videos.map(v=> <VideoCard key={v.id} video={v} />)}
    </section>
  )
}