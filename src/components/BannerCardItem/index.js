// Write your code here.
import './index.css'

const Welcome = props => {
  const {name} = props
  const {headerText, description, className} = name
  return (
    <li className={`card ${className}`}>
      <div className="container">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button className="button">Show More</button>
      </div>
    </li>
  )
}

export default Welcome
