import React from "react";
class Weather extends React.Component{
    
   
     render(){
       
         return(
             <div>
              
                {
                    this.props.city && <p className="weather__key">Location:
                     <span className="weather__value">{this.props.city}</span></p>
                     }

                {
                    this.props.tempraure && <p className="weather__key">Temprature: 
                <span className="weather__value">{this.props.tempraure}</span></p>
            }
                
               
               
                     {
                    this.props.humidity && <p className="weather__key">Humidity:
                 <span className="weather__value">{this.props.humidity}</span></p>
                    }
                
                    {
                    this.props.description && <p className="weather__key">Conditions:
                    <span className="weather__value">{this.props.description}</span> </p>

                }
                 
                 
                    {
                    this.props.windspeed && <p className="weather__key">WindSpeed:
                    <span className="weather__value">{this.props.windspeed}</span></p>
                    }
           
            </div>
        )
    }
}
export default Weather;