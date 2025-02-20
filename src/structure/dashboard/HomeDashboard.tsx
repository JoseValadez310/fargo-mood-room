
// React 
import { useState, useEffect } from "react"

// React Router DOM
import { Link } from "react-router-dom"

// CSS Files 
import "../../assets/css/index.css"
import "../../assets/css/dashboard_css/Home_Dashboard.sass"

// Components
import DateDisplay from "../../components/DateDisplay"
import Clock       from "../../components/Clock"

//  icons

//


const HomeDashboard = () => {
    
    const [mode1,setMode1] = useState("close_button_container")
        const [mode1_status,setMode1_status] = useState("short_menu")
    const [mode2,setMode2] = useState("close_button_container")
        const [mode2_status,setMode2_status] = useState("short_menu")
    const [mode3,setMode3] = useState("close_button_container")
        const [mode3_status,setMode3_status] = useState("short_menu")
    const [mode4,setMode4] = useState("close_button_container")
        const [mode4_status,setMode4_status] = useState("short_menu")


    const [count,setCount] = useState(1)
    const [viewportViewer,setViewportViewer ] = useState(false)

    const ViewPortCounter = () => {
        if(count === 5){  
            setViewportViewer(true)
        }
        setCount(count+1)

    }


       const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    
        const updateScreenSize = () => {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
      
        useEffect(() => {
          window.addEventListener('resize', updateScreenSize);
          return () => window.removeEventListener('resize', updateScreenSize);
        }, []);


        const closeModal = (id:number) =>{
            switch (id) {
                case 1:
                    setMode1("close_button_container")
                    setMode1_status("short_menu")

                    break;
                case 2:
                    setMode2("close_button_container")
                    setMode2_status("short_menu")

                    break;
                case 3:
                    setMode3("close_button_container")
                    setMode3_status("short_menu")

                    break 
                case 4:
                    setMode4("close_button_container")
                    setMode4_status("short_menu")

                    break;
            
                default:

                    break;
            }
        }
    


        const enableModal = (type:string) => {
            if(type === "open1"){
                setMode1("open_button_container")
                setMode1_status("long_menu")
            }
            else if(type === "close1"){
                setMode1("exit_button_container")
                setMode1_status("exit_menu")
                setTimeout(() => {
                    closeModal(1)
                }, 475); 
            }

            if(type === "open2"){
                setMode2("open_button_container")
                setMode2_status("long_menu")
            }
            else if(type === "close2"){
                setMode2_status("exit_menu")
                setMode2("exit_button_container")
                setTimeout(() => {
                    closeModal(2)
                }, 475); 
            }

            if(type === "open3"){
                setMode3_status("long_menu")
                setMode3("open_button_container")
            }
            else if(type === "close3"){
                setMode3_status("exit_menu")
                setMode3("exit_button_container")
                setTimeout(() => {
                    closeModal(3)
                }, 475); 
            }

            if(type === "open4"){
                setMode4_status("long_menu")
                setMode4("open_button_container")
            }
            else if(type === "close4"){
                setMode4_status("exit_menu")
                setMode4("exit_button_container")
                setTimeout(() => {
                    closeModal(4)
                }, 475); 
            }
        }
    



    const non_mobile_view = <>
            <div className="menu">
                <h1 className="title"> Some Title</h1>
                <div className="button_container">
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                </div>

            </div>

            <div className="menu">
                <h1 className="title"> Some Title</h1>
                <div className="button_container">
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                </div>

            </div>

            <div className="menu">
                <h1 className="title"> Some Title</h1>
                <div className="button_container">
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                </div>

            </div>

            <div className="menu">
                <h1 className="title"> Some Title</h1>
                <div className="button_container">
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                </div>

            </div>
    </>


    const mobile_view = (
    <>
            <div className={mode1_status} onClick={() => {mode1 === "close_button_container"? enableModal("open1") : enableModal("close1")}}>
                <h1 className="title"> Some Title 1</h1>
                <div className={mode1}>
                    <button className="btn_square"><p> {mode1} </p></button>
                    <button className="btn_square"><p> mobile </p></button>
                    <button className="btn_square"><p> mobile </p></button>
                    <button className="btn_square"><p> mobile </p></button>
                    <button className="btn_square"><p> mobile </p></button>
                </div>

            </div>

            <div className={mode2_status} onClick={() => {mode2 === "close_button_container"? enableModal("open2") : enableModal("close2")}}>
                <h1 className="title"> Some Title 2</h1>
                <div className={mode2}>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                </div>

            </div>

            <div className={mode3_status} onClick={() => {mode3 === "close_button_container"? enableModal("open3") : enableModal("close3")}}>
                <h1 className="title"> Some Title 3</h1>
                <div className={mode3}>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                </div>

            </div>

            <div className={mode4_status} onClick={() => {mode4 === "close_button_container"? enableModal("open4") : enableModal("close4")}}>
                <h1 className="title"> Some Title 4</h1>
                <div className={mode4}>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                    <button className="btn_square"><p> name </p></button>
                </div>

            </div>
    </>
    )




    return (

        <div className="home">
          
        <div className="time_date">
            <div className="clock_info" onClick = {ViewPortCounter} style={{width:"100%"}}>
                <Clock/>
            </div>

            <div className="date-info">
                <DateDisplay />
            </div>

            <div className="tool">
                {viewportViewer? <Link to={"/ScreenSize"}> <p style={{fontSize:"large"}}> Enter Developer Portal </p> </Link> : '' }
            </div>
        </div>
                  
             


        <div className="menu_container">

           
           {screenSize.width < 500? 

            mobile_view
            :
            non_mobile_view
        
            }
           

        </div>







        
         


















            

      

            

                    <div className="nav">
                                                </div>

           


           



              
           
        </div>

    )  
}

export default HomeDashboard