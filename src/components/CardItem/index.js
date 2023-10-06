import './index.css'
// Write your code here.
const CardList = props => {
  const {technologycardList} = props
  const {title, description, imgUrl, className} = technologycardList
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{title}</h1>
        <p className="para">{description}</p>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardList
