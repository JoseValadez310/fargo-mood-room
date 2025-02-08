// React

//React Router DOM
import { Link } from "react-router-dom";

//CSS
import "../../assets/css/dashboard_css/Climate_Dashboard.css"


//Icons
import menu_button from "../../assets/images/icons/icons8-arrow.svg"

// Thermo






const ClimateDashboard = () =>{

  




  

    





  


    return(


     


     


     
            <div className="climate_page">


<Link to={"/"} className="mobile_back_btn"> 
                <button className="back_button">
                    <img src={menu_button}/>
                </button>
            </Link>




    <div className="nav_container">
            <Link to={"/"}> 
                <button className="back_button">
                    <img src={menu_button}/>
                </button>
            </Link>

       

      

      

       </div>



                <h1 className="title_info"> Climate Dashboard </h1>


                <div className="climate_dashboard_container">
                
                  <div className="container_thermo">
                    <p className="climate_label"> Dine Hall</p>
                  </div>

                  <div className="container_thermo">
                  <p className="climate_label"> Library Hall</p>
                  </div>

                  <div className="container_thermo">
                  <p className="climate_label"> Master </p>
                  </div>

                  <div className="container_thermo">
                  <p className="climate_label"> Top Floor</p>
                  </div>

                  <div className="container_thermo">
                  <p className="climate_label"> West Rooms</p>
           
                  </div>
        
                </div>
                
                  


                    

                    
                 
            </div>
       

       

        
    )
}

export default ClimateDashboard