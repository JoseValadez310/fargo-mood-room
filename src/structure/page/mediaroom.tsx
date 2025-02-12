
// React 
import { useEffect, useState } from "react"

// React Router DOM
import { Link } from "react-router-dom"

//----------------------------------------------------------------------------------------------- Controller Componenets
import AppleTv from "../../components/controllers/AppleTv"
import DirecTv from "../../components/controllers/DirecTv"
//import BluRay from "../../components/controllers/BluRay"
//import Kaleidescape from "../../components/controllers/Kaleidescape"
// Music Page import 

// -----------------------------------------------------------------------------------------------CSS
import "../../assets/css/page_css/genericRoom.css"

// ----------------------------------------------------------------------------------------------- Componenets 

import DateDisplay from "../../components/DateDisplay"
import Clock       from "../../components/Clock"

// ----------------------------------------------------------------------------------------------- Logos
import appleTV      from "../../assets/images/logos/Apple_TV_(logo).svg"
import small_dtv     from "../../assets/images/logos/DTV_logo.svg"
import direcTv      from "../../assets/images/logos//DIRECTV_2021_logo.svg"
//import roku from "../../assets/images/logos/Roku_logo.svg"
//import kscape       from "../../assets/images/logos/Kaleidescape_(logo).svg"
//import bluRay       from '../../assets/images/logos/blu-ray-disc.svg'
//import vhs          from "../../assets/images/logos/VHS_logo.svg"

// ----------------------------------------------------------------------------------------------- General Icons
import TV          from "../../assets/images/icons/icons8-tv.svg"
import lights      from "../../assets/images/icons/noun-light-bulb-2216273.svg"
import music       from "../../assets/images/icons/icons8-music.svg"
import menu_button from "../../assets/images/icons/icons8-arrow.svg"
import mute        from "../../assets/images/icons/icons8-no-audio.svg"
import arrow       from "../../assets/images/icons/icons8-triangle-arrow.svg"




const MediaRoom = () =>{
/*
---------------------------------------------------------------------------- Basic information regarding the page
*/
    const roomName = "Media Room"
/*
---------------------------------------------------------------------------- Room dashboard apps 
*/
    const [roomApps, setRoomApps]         = useState(false) 
    const [tvOptions, setTvOptions]       = useState(true)
    const [musicOption, setMusicOption]   = useState(false)
    const [lightsOption, setLightsOption] = useState(false)
/*
---------------------------------------------------------------------------- Local and dynamic control of media sources 
*/
    const [media1, setMedia1]   = useState(false)
    const [media2, setMedia2]   = useState(false)
    const [media3, setMedia3]   = useState(false)
    const [media4, setMedia4]   = useState(false)
    const [media5, setMedia5]   = useState(false)
    const [media6, setMedia6]   = useState(false)
    const [media7, setMedia7]   = useState(false)
    const [media8, setMedia8]   = useState(false)
/*
---------------------------------------------------------------------------- selects the correct controller to display based on the media# state
*/
    let active_media:boolean  // controls the avaiablity of either source tiles or controller/volume 
    let media_1:string
    let media_2:string
    let media_3:string
    let media_4:string
    let media_5:string
    let media_6:string
    let media_7:string
    let media_8:string

    const roomLocation:string = "1"
/*
---------------------------------------------------------------------------- Room Vol / Mute status
*/
    const [roomVolume,setRoomVolume]  = useState(0)
    const [roomMute, setRoomMute]     = useState(false)
/*
---------------------------------------------------------------------------- Modals for Apple Tv Reboot or Room shutdown
*/
    const [displayReboot, setDisplayReboot] = useState(false) // Apple TV reboot menu 
    const [tvPowerMenu, setTvPowerMenu] = useState(false)      //  TV Power Menu    
/*
---------------------------------------------------------------------------- Lighting info
*/





// console.log 



/*
----------------------------------------------------------------------------------------------------------------------------------------
*/

    useEffect(() => {
        // TV Soucres
        const media1 = window.CrComLib.subscribeState("b","1",(value: boolean) => {setMedia1(value);});  // DTV 
        const media2 = window.CrComLib.subscribeState("b","2",(value: boolean) => {setMedia2(value);});  // Apple TV
        const media3 = window.CrComLib.subscribeState("b","-",(value: boolean) => {setMedia3(value);});  // 
        const media4 = window.CrComLib.subscribeState("b","-",(value: boolean) => {setMedia4(value);});  // 
        const media5 = window.CrComLib.subscribeState("b","-",(value: boolean) => {setMedia5(value);});  // 
        const media6 = window.CrComLib.subscribeState("b","-",(value: boolean) => {setMedia6(value);});  // 
        const media7 = window.CrComLib.subscribeState("b","-",(value: boolean) => {setMedia7(value);});  // 
        const media8 = window.CrComLib.subscribeState("b","-",(value: boolean) => {setMedia8(value);});  // 
       
        // TV audio controls
        const roomVolume     = window.CrComLib.subscribeState("n","107",(value: number) => {setRoomVolume(value);});
        const roomMute    = window.CrComLib.subscribeState("b","522",(value: boolean) => {setRoomMute(value);});

        // Lights

     

        return () => {

            // TV Soucres
            window.CrComLib.unsubscribeState("b","1",media1)
            window.CrComLib.unsubscribeState("b","2",media2)
            window.CrComLib.unsubscribeState("b","-",media3)
            window.CrComLib.unsubscribeState("b","-",media4)
            window.CrComLib.unsubscribeState("b","-",media5)
            window.CrComLib.unsubscribeState("b","-",media6)
            window.CrComLib.unsubscribeState("b","-",media7)
            window.CrComLib.unsubscribeState("b","-",media8)
         
            // TV audio controls
            window.CrComLib.unsubscribeState("n","107",roomVolume)
            window.CrComLib.unsubscribeState("b","522",roomMute)

       
            
        }
      }, []);


/*
---------------------------------------------------------------------------- Light section  
*/


    
/*
---------------------------------------------------------------------------- Checks to see if any media sources are currently on
*/

    if(media1){
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation}`,1)
    //display controller and hide source selection
       active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_on"      
        media_2 = "media_off"  
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_off"   
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    } 
    else if(media2){
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation}`,2)
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
       media_1 = "media_off"   
       media_2 = "media_on" 
       media_3 = "media_off"  
       media_4 = "media_off"  
       media_5 = "media_off"  
       media_6 = "media_off"  
       media_7 = "media_off"  
       media_8 = "media_off"     
    } 
    else if(media3){
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation}`,3)
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_on"  
        media_4 = "media_off"  
        media_5 = "media_off"  
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    } 
    else if(media4){
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation}`,4)
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_on"  
        media_5 = "media_off"  
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    } 
    else if(media5){
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation}`,5)
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_on"  
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    } 
    else if(media6){
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation}`,6)
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_off"  
        media_6 = "media_on"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    } 
    else if(media7){
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation}`,7)
    //display controller and hide source selection
        active_media = true
    //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_off"  
        media_6 = "media_off"  
        media_7 = "media_on"  
        media_8 = "media_off"  
    } 
    else if(media8){
    //Sending Crestron Media ID
        window.CrComLib.publishEvent("n",`${roomLocation}`,8)
    //display controller and hide source selection
        active_media = true
     //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_off"  
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_on"    
    } 
    else {
        active_media = false

       //display controller and hide source selection
            active_media = false
       //displaying the correct controller and hiding the rest
        media_1 = "media_off"   
        media_2 = "media_off" 
        media_3 = "media_off"  
        media_4 = "media_off"  
        media_5 = "media_off"  
        media_6 = "media_off"  
        media_7 = "media_off"  
        media_8 = "media_off"  
    }
   



    // Tile click, function calls to set local values and crestron values
        const playSource = (id:string) =>{
            if(id === "media1"){
                // Send command to Crestron         
                setMedia1(true)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                
                

                // Signal Name 
                window.CrComLib.publishEvent("b","1",true)
                window.CrComLib.publishEvent("b","1",false)

                console.log("DirecTV", 1)
                //Sending Crestron Media ID
                window.CrComLib.publishEvent("n",`${roomLocation}`,1)
            } 
            else if (id === "media2"){
                // Send command to Crestron 
                setMedia1(false)
                setMedia2(true)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                
                

                window.CrComLib.publishEvent("b","2",true)
                window.CrComLib.publishEvent("b","2",false)

                console.log("Kaleidescape join", 2)
                //Sending Crestron Media ID
                window.CrComLib.publishEvent("n",`${roomLocation}`,2)
            } 
            else if (id === "media3"){
                // Send command to Crestron 
                setMedia1(false)
                setMedia2(false)
                setMedia3(true)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
            
                

                // Signal Name 
                window.CrComLib.publishEvent("b","3",true)
                window.CrComLib.publishEvent("b","3",false)

                console.log("DTV 3 House 1 join", 3)
                //Sending Crestron Media ID
                window.CrComLib.publishEvent("n",`${roomLocation}`,3)
            } 
            else if (id === "media4"){
                // Send command to Crestron 
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(true)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                
                

                // Signal Name 
                window.CrComLib.publishEvent("b","4",true)
                window.CrComLib.publishEvent("b","4",false)

                console.log("DTV 4 House 2 join", 4)
                //Sending Crestron Media ID
                window.CrComLib.publishEvent("n",`${roomLocation}`,4)
            } 
            else if (id === "media5"){
                // Send command to Crestron 
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(true)
                setMedia6(false)
                setMedia7(false)
                setMedia8(false)
                
                

                // Signal Name 
                window.CrComLib.publishEvent("b","5",true)
                window.CrComLib.publishEvent("b","5",false)
    
                console.log("DTV 5 Steve join", 5)

                //Sending Crestron Media ID
                window.CrComLib.publishEvent("n",`${roomLocation}`,5)
            } 
            else if (id === "media6"){
                // Send command to Crestron 
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(true)
                setMedia7(false)
                setMedia8(false)

                

            // Signal Name 
            window.CrComLib.publishEvent("b","6",true)
            window.CrComLib.publishEvent("b","6",false)

            console.log("ATV 1 House 1 join", 6)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation}`,6)
            } 
            else if (id === "media7"){
                // c
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(true)
                setMedia8(false)

                

                // Signal Name 
            window.CrComLib.publishEvent("b","7",true)
            window.CrComLib.publishEvent("b","7",false)

            console.log("ATV 2 House 2 join", 7)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation}`,7)
            } 
            else if (id === "media8"){
                // c
                setMedia1(false)
                setMedia2(false)
                setMedia3(false)
                setMedia4(false)
                setMedia5(false)
                setMedia6(false)
                setMedia7(false)
                setMedia8(true)
                
                

            // Signal Name 
            window.CrComLib.publishEvent("b","8",true)
            window.CrComLib.publishEvent("b","8",false)

            console.log("ATV 3 Steve join", 8)
            //Sending Crestron Media ID
            window.CrComLib.publishEvent("n",`${roomLocation}`,8)
            } 
            }

    // Volume control for current room
        const tvVolState = (id:string) =>{

        if(id === "up"){
            console.log('vol up join', 523)
            
            window.CrComLib.publishEvent("b","523",true)
            window.CrComLib.publishEvent("b","523",false)
        } 
        
        else if(id === "down"){
            console.log('vol down join', 521)
            
            window.CrComLib.publishEvent("b","521",true)
            window.CrComLib.publishEvent("b","521",false)
        } 
        
        else if(id === "mute"){
            console.log('vol mute join',522 )
            
            window.CrComLib.publishEvent("b","522",true)
            window.CrComLib.publishEvent("b","522",false)
        }

            }

    // Power menu for current room
        const powerMenu = (id:string) =>{
            if(id==="menu"){
                console.log("into power menu")
                setTvPowerMenu(!tvPowerMenu)

                if(displayReboot){
                        console.log("closing menu")
                        setDisplayReboot(false)
                    }
            } 
            
            else if(id==="menu_off"){
                console.log("Turning off room join", 49)
                setTvPowerMenu(!tvPowerMenu)
                window.CrComLib.publishEvent("b","49",true)
                window.CrComLib.publishEvent("b","49",false)

            }
            }
    
    // Back button calls this function 
        const display_tile = () => {   
        //display controller
            active_media = false
        // Hide all controllers
            media_1 = "media_off"
            media_2 = "media_off"
            media_3 = "media_off"
            media_4 = "media_off"
            media_5 = "media_off"
            media_6 = "media_off"
            media_7 = "media_off"
            media_8 = "media_off"
        // crestron override
            setMedia1(false)
            setMedia2(false)
            setMedia3(false)
            setMedia4(false)
            setMedia5(false)
            setMedia6(false)
            setMedia7(false)
            setMedia8(false)


           
        }

    //Apple TV Controls
        const appleTvRebootMenu = (id:string) =>{

        if(id === "menu"){
        setDisplayReboot(!displayReboot)
        }
        else if(id === "reboot"){

            console.log(id, "signal name 50")
            window.CrComLib.publishEvent("b","50",true)
            window.CrComLib.publishEvent("b","50",false)

            setDisplayReboot(!displayReboot)
        } 


            }

    // Rooms App Control section 
        const roomApp = (id:string) => {
            active_media = false

            if(id === "TV"){

                setTvOptions(true)
                setMusicOption(false)
                setLightsOption(false)

                setRoomApps(false)
                
            } 
            else if(id === "Music"){
                setTvOptions(false)
                setMusicOption(true)
                setLightsOption(false)
                
                setRoomApps(false)
            }
            else if(id === "Lights"){
                setTvOptions(false)
                setMusicOption(false)
                setLightsOption(true)
                
                setRoomApps(false)
               
            }

            else if(id === "RoomApps"){
                setTvOptions(false)
                setMusicOption(false)
                setLightsOption(false)
                
                setRoomApps(true)

             
          
            }
            
  
        }


      
      
       
    return (

        <div className="generic_room">

            




            <div className="display_none" id ={active_media? "mobile_display_none" : "mobile_display_contemt" } >

               
            
                <div className="nav">
                        <button onClick={() => roomApp("TV")} className={tvOptions?   "btn_selected" : "btn_not_selected"} >  
                            <img src={TV}/> 
                            <p>Media</p>
                        </button>
                        
                        <Link to={"/AudioDashboard"} className={musicOption? "btn_selected" : "btn_not_selected"}   > 
                            <img src={music}   /> 
                            <p>Music</p>
                         </Link>

                        <button onClick={() => roomApp("Lights")} className={lightsOption? "btn_selected" : "btn_not_selected"} >  
                            <img src={lights}  /> 
                            <p>Lights</p>
                        </button>
                </div>
                
             

            </div>

       

            <div className="title_info">
                    <div className="clock_info"  style={{width:"100%"}}>
                    <h1 className="title_info" style={{width:"100%",margin:"0%"}}> {roomName} </h1>

                    </div>

                    <div className="date-info">
                        {active_media? <Clock/> : <> <Clock/> <DateDisplay /></>} 
                    
                    </div>
                </div>
            



            <div className={tvPowerMenu? "power_menu_overlay" : "hide_power_menu_overlay"} >
                <div className="power_menu">
                    <p className="power_menu_text" style={{margin:"1rem"}}> 
                        Would you like to turn off the {roomName}?
                    </p>

                    <div className="power_menu_button">
                        <Link className="yes_reboot" to={"/"}> 
                            <button className="yes_reboot" onClick={()=> powerMenu("menu_off")}> 
                                <p>YES</p> 
                            </button> 
                        </Link>
                        
                        <button className="no_reboot" onClick={()=> powerMenu("menu")}> 
                            <p>NO</p> 
                        </button>
                    </div>
                </div>
            </div>

            <div className={displayReboot? "power_menu_overlay": "hide_reboot_menu"} onClick={()=> appleTvRebootMenu("menu")}>
                <div className="power_menu" onClick={()=> appleTvRebootMenu("menu")}>
                    <p className="power_menu_text">
                        Would you like to Reboot the {roomName}'s Apple TV?
                    </p>

                    <div className="power_menu_button">
                        <button className="yes_reboot" onClick={() => appleTvRebootMenu("reboot")}> 
                            <p>YES</p> 
                        </button> 
                        
                        <button className="no_reboot"  onClick={()=> appleTvRebootMenu("menu")}> 
                            <p>NO</p> 
                        </button>
                    </div>
                </div>
            </div>

           
            <div className={roomApps? "generic_room_dashboard" : "media_off"}>
                <div className="generic_room_card" onClick={() => roomApp("TV")}>
                    <img src={TV}/>
                    <p> TV </p>
                </div>   

                <Link to={'/AudioDashboard'} className="generic_room_card" style={{textDecoration:"none"}}>
                    <img src={music}/>
                    <p> Music </p>
                </Link>
                
                <div className="generic_room_card" onClick={() => roomApp("Lights")}>
                    <img src={lights}/>
                    <p> Lights </p>
                </div>  

            </div>
                   


                    <div className={tvOptions? "generic_media_container" : "media_off"} id="all_source_layout" >
                        <div className={active_media? "media_off":"room_sources_container"}>
                            
                            <div className="source_card" id= { media1? 'active_source' : 'not_active' } onClick={()=>playSource('media1')}>
                                <div className="img_container">
                                 <img className="directTV_logo" src={small_dtv}   />
                                </div>
                               
                            
                            </div>

                            <div className="source_card" id= { media2 ? 'active_source' : 'not_active' } onClick={()=>playSource('media2')}>
                                <div className="img_container">
                                    <img className="appleTV_logo" src={appleTV} id="svg_gray" />
                                </div>
                           
                            </div>

                           
                            <div className="display_none" id= { media3? 'active_source' : 'not_active' } onClick={()=>playSource('media3')}>
                                <div className="img_container">
                                    <img className="directTV_logo" src={small_dtv}   />
                                </div>

                                <p>House</p>
                            </div>

                            <div className="display_none" id= { media4? 'active_source' : 'not_active' } onClick={()=>playSource('media4')}>
                                <div className="img_container">
                                    <img className="appleTV_logo" src={appleTV}   />
                                </div>

                                <p>House 2</p>
                            </div>

                            <div className="display_none" id= { media5? 'active_source' : 'not_active' } onClick={()=>playSource('media5')}>
                                <div className="img_container">
                                    <img className="directTV_logo" src={small_dtv}   />
                                </div>

                                <p>Steve</p>
                            </div>

                            <div className="display_none" id= { media6? 'active_source' : 'not_active' } onClick={()=>playSource('media6')}>
                                <div className="img_container">
                                    <img className="appleTV_logo" src={appleTV} id="svg_gray" />
                                </div>
                               
                                <p>House</p>
                            </div>

                            <div className="display_none" id ={ media7? 'active_source' : 'not_active' }onClick={()=>playSource('media7')}>
                                <div className="img_container">
                                    <img className="appleTV_logo" src={appleTV} id="svg_gray" />
                                </div>
                             
                                <p>House 2</p>
                            </div>

                            <div className="display_none" id ={ media7? 'active_source' : 'not_active' }onClick={()=>playSource('media8')}>
                                <div className="img_container">
                                    <img className="appleTV_logo" src={appleTV} id="svg_gray" />
                                </div>
                             
                                <p>Steve</p>
                            </div>
                            
                        </div>
                
                        <div className={active_media? "controller_layout": "media_off"}>

                            <button id="controller_layout_back_button"  onClick = {display_tile}>
                                <img src={menu_button}  alt="back arrow" className="back_button_svg"/>
                            </button>


                            <div className="logo_display">
                                <div className={media1? "controller_logo_wrapper":"media_off"}>
                                    <img className="controller_logo_dtv" src={direcTv} id="svg_gray"/>
                                        <p></p>
                                </div>

                                <div className={media2? "controller_logo_wrapper":"media_off"}>
                                    <img className="controller_logo_kaleidescape" src={appleTV} id="svg_gray"/>
                                        <p></p>
                                </div>

                                <div className={media3? "controller_logo_wrapper":"media_off"}>
                                    <img className="controller_logo_dtv" src={direcTv} id="svg_gray"/>
                                    <p className="user_title_controller"> House </p>
                                </div>

                                <div className={media4? "controller_logo_wrapper":"media_off"}>
                                    <img className="controller_logo_dtv" src={direcTv} id="svg_gray"/>
                                    <p className="user_title_controller"> House 2 </p>
                                </div>

                                <div className={media5? "controller_logo_wrapper":"media_off"}>
                                    <img className="controller_logo_dtv" src={direcTv} id="svg_gray"/>
                                    <p className="user_title_controller"> Steve</p>
                                </div>

                                <div className={media6? "controller_logo_wrapper":"media_off"}>
                                    <img className="controller_logo_atv" src={appleTV} id="svg_gray"/>
                                    <p className="user_title_controller">House</p>
                                </div>

                                <div className={media7? "controller_logo_wrapper":"media_off"}>
                                    <img className="controller_logo_atv" src={appleTV} id="svg_gray"  />
                                    <p className="user_title_controller">House 2</p>
                                </div>

                                <div className={media8? "controller_logo_wrapper":"media_off"}>
                                    <img className="controller_logo_atv" src={appleTV} id="svg_gray"  />
                                    <p className="user_title_controller">Steve</p>
                                </div>

                            </div>


                            <button className={media6 ||media7 || media8? "btn_circle": "media_off"} id="reboot_button" onClick={()=>appleTvRebootMenu("menu")}> 
                                <p> REBOOT </p>
                            </button>

                            <div className="controller_grid">

                                <div className={media_1} id="direct_controller">
                                    <DirecTv />
                                </div>

                                <div className={media_2} id="apple_tv_controller">
                                    <AppleTv />
                                </div>
                                   
                                <div className={media_3} id="direct_controller">
                                    <DirecTv />
                                </div>

                                <div className={media_4} id="direct_controller">
                                    <DirecTv />
                                </div>

                                <div className={media_5} id="direct_controller">
                                    <DirecTv />
                                </div>

                                <div className={media_6} id="apple_tv_controller">
                                    <AppleTv />
                                </div>

                                <div className={media_7} id="apple_tv_controller" >
                                   <AppleTv />
                                </div>

                                <div className={media_8} id="apple_tv_controller">
                                    <AppleTv />
                                </div>
                                

                            </div>
                                   

                        </div>

                      
                    </div>


                    <div className={active_media? "volume_container" : "media_off"}>
                                                 
                        <button className="btn_square">
                            <img className="btn_image"src={arrow} onClick={()=> tvVolState("down")}/>
                        </button>
                        
                            <button className="btn_square_wide" onClick={()=> tvVolState("mute")}>
                                {roomMute? 
                                <>
                                    <img src={mute} style={{height:"50%"}}/>
                                    <p className="mute_btn_txt">Click to Unmute</p>
                                </>
                                    
                                    :
                                <>
                                    <p className="volume_txt">{roomVolume}</p>
                                    <p className="mute_btn_txt">Click to Mute</p>
                                    </>
                            }
                            </button>

                        <button className="btn_square" onClick={()=> tvVolState("up")}>
                            <img className="btn_image"src={arrow} id="flip"/>
                        </button>

                    </div>
                

                    <div className={musicOption? "music_app" : "media_off"} >
                    </div>

                    <div className={lightsOption? "lights_app" : "display_none"} >
   
                    </div>

            
        </div>


    )
}



export default MediaRoom