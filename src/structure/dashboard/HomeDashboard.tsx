
// React 
import { useState } from "react"

// React Router DOM
import { Link } from "react-router-dom"

// CSS Files 
import "../../assets/css/index.css"
import "../../assets/css/dashboard_css/Home_Dashboard.sass"

// Components
import DateDisplay from "../../components/DateDisplay"
import Clock       from "../../components/Clock"

//  icons
import TV          from "../../assets/images/icons/icons8-tv.svg"
import music       from "../../assets/images/icons/icons8-music.svg"


//

import MediaRoom from "../page/mediaroom"
import AudioDashboard from "../dashboard/AudioDashboard"

const HomeDashboard = () => {

    const [count,setCount] = useState(1)
    const [viewportViewer,setViewportViewer ] = useState(false)

    const ViewPortCounter = () => {
        if(count === 5){  
            setViewportViewer(true)
        }
        setCount(count+1)

    }



    const [mediaPage, setMediaPage] = useState(true)
    const [musicPage, setMusicPage] = useState(false)


    const switchViewer = (id:string) => {


        if(id === 'media'){
            setMediaPage(true)
            setMusicPage(false)
        } 
        else if(id === 'music'){
            setMediaPage(false)
            setMusicPage(true)
        }
    }


    return (

        <div className="living_room_page">
          
                <div className="display_none">
                    <div className="clock_info" onClick = {ViewPortCounter} style={{width:"100%"}}>
                        <Clock  />

                        <>
                            {viewportViewer?  <div style={{height:"3rem",width:"20rem", backgroundColor:"rgb(70,70,70)", display:"flex",justifyContent:'center',alignContent:"center"}}> <Link to={"/ScreenSize"}> <p style={{fontSize:"large"}}> Enter ViewPort Viewer  </p> </Link> </div>  : '' }
                        </>
                    </div>

                    <div className="date-info">
                        <DateDisplay />
                    </div>
                </div>
            







        
            <div className="activity_container">

                {mediaPage? <MediaRoom />: <AudioDashboard />}

            </div>



















            

      

                <div className="bottom_nav">

                    <div className="nav">
                            <button onClick={() => switchViewer("media")} className={mediaPage?   "btn_selected" : "btn_not_selected"} >  
                                <img src={TV}/> 
                                <p>Media</p>
                            </button>
                        

                            <button onClick={() => switchViewer("music")} className={musicPage? "btn_selected" : "btn_not_selected"} >  
                                <img src={music}  /> 
                                <p>Music</p>
                            </button>
                    </div>

           

       </div>

           



              
           
        </div>

    )  
}

export default HomeDashboard