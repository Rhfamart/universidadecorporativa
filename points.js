let data = { users: [ { id:1, name:'João', points: 320 }, { id:2, name:'Suellen', points: 210 } ] };

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(data)
  } else if (req.method === 'POST') {
    const { userId, delta } = req.body
    const user = data.users.find(u => u.id === userId)
    if (user) user.points += Number(delta || 0)
    res.status(200).json({ updated: true, user })
  } else {
    res.status(405).end()
  }
}