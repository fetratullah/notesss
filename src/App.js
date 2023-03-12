import React, {useState, useEffect} from 'react';
import axios from 'axios';
//import logo from './logo.svg';
import './App.css';

const App = () => {

  const [spelarensName, setSpelarensName] = useState([]);
  const [spelarensBild, setSpelarensBild] = useState([]);


      /**
     * there is tow API, one is för the players name and the other is för
     * the picture of the player 
     * för the name of player: there is an id för evry player that you can se in first link
     * ass LeBron has id 237, in the same way in the link picture is the last one (203507)
     * the key for the picture that i printed. 
     */

  const fetchData = () => {
    const playerAPI = "https://www.balldontlie.io/api/v1/players/237";
    const playerPic = "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/1629630.png";

    const getNBAPlayer = axios.get(playerAPI)
    const getPlayerPic = axios.get(playerPic)
    axios.all([getNBAPlayer, getPlayerPic]).then(
      axios.spread((...allData) => {

        const allDataPlayer = allData[0].data.first_name
        const getNBAPlayerPic = allData[1].config.url;
  
        setSpelarensName(allDataPlayer)
        setSpelarensBild(getNBAPlayerPic)

      })
    )
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="App">
      Spelarens Namn Är: {spelarensName}
      <img src= {spelarensBild} alt="description of img"/>

    </div>
  );
}

export default App;
