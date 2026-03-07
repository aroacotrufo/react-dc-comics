import logo_digital from "../assets/img/buy-comics-digital-comics.png"
import logo_merchandise from "../assets/img/buy-comics-merchandise.png"
import logo_shop from "../assets/img/buy-comics-shop-locator.png"
import logo_subscriptions from "../assets/img/buy-comics-subscriptions.png"
import logo_power from "../assets/img/buy-dc-power-visa.svg"


export default function AppMain(){

    return (
        <main>
            <div class="firstContainer">
               <span>-- Content goes here--</span> 
                </div>
                <div class="secondContainer">
                <img src={logo_digital} alt=""/>
                <p>DIGITAL COMICS</p>
                <img src={logo_merchandise} alt=""/>
                <p>DC MERCHANDISE</p>
                <img src={logo_shop} alt=""/>
                <p>SUBSCRIPTION</p>
                <img src={logo_subscriptions} alt=""/>
                <p>COMIC SHOP LOCATOR</p>
                <img class="logopower" src={logo_power} alt=""/>
                <p>DC POWER VISA</p>
                
                </div>
            
            </main> 
    )
}