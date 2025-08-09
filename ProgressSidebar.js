export default function ProgressSidebar(){
  return (
    <aside className="sidebar">
      <div className="card">
        <h4>Progresso</h4>
        <div className="bar"><div className="fill" style={{width:'56%'}}></div></div>
        <small>56% para o próximo nível</small>
      </div>
      <div className="card">
        <h4>Desafios</h4>
        <ul><li>Complete 3 microaulas</li><li>Poste um caso aplicado</li></ul>
      </div>
    </aside>
  )
}