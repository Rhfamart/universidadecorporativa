export default function handler(req, res) {
  res.status(200).json({ badges: [
    { id:'rookie', title:'Rookie Learner', requirement: '100 points' },
    { id:'applied', title:'Applied Learner', requirement: '3 applications posted' }
  ] })
}