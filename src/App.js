import Welcome from './components/BannerCardItem'

import './App.css'

const bannerCardsList = [
  {
    id: 1,
    headerText: 'The Seasons Latest',
    description: 'Get the seasons all latest designs in a flick of your hand',
    className: 'card-1',
  },
  {
    id: 2,
    headerText: 'Our New Designs',
    description:
      'Get the designs developed by our in-house team all for yourself',
    className: 'card-2',
  },
  {
    id: 3,
    headerText: 'Insiders',
    description: 'Get the top class products for yourself with an extra off',
    className: 'card-3',
  },
]

console.log(bannerCardsList[0].id)

const App = () => (
  <ul className="bg-container">
    <Welcome name={bannerCardsList[0]} key={bannerCardsList[0].id} />
    <Welcome name={bannerCardsList[1]} key={bannerCardsList[1].id} />
    <Welcome name={bannerCardsList[2]} key={bannerCardsList[2].id} />
  </ul>
)

export default App
