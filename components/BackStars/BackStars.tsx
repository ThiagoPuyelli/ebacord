
const BackStars = () => {
  let stars = []
  for (let i  = 0;i < 50;i++) {
    stars.push(
      <div className="star" key={i}></div>
    )
  }
  return (
    <div className="stars">
      {stars}
    </div>
  )
}

export default BackStars