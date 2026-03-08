
import logo_dc_footer from "../assets/img/dc-logo-bg.png"
import fb from "../assets/img/footer-facebook.png"
import pinterest from "../assets/img/footer-pinterest.png"
import periscope from "../assets/img/footer-periscope.png"
import twitter from "../assets/img/footer-twitter.png"
import yt from "../assets/img/footer-youtube.png"
export default function AppFooter(){

    return(
        <footer>
            <div class="listFooter">
                <li>
                    <ul class="title"> DC COMICS</ul>
                    <ul>Characters</ul>
                    <ul>Comics</ul>
                    <ul>Movies</ul>
                    <ul>TV</ul>
                    <ul>Games</ul>
                    <ul>Videos</ul>
                    <ul>News</ul>
                    <ul class="title"> DC COMICS</ul>
                    <ul>Characters</ul>
                    <ul>Comics</ul>
                </li>
                 <li>
                    <ul class="title"> DC COMICS</ul>
                    <ul>Characters</ul>
                    <ul>Comics</ul>
                    <ul>Movies</ul>
                    <ul>TV</ul>
                    <ul>Games</ul>
                    <ul>Videos</ul>
                    <ul>News</ul>
                    <ul>Games</ul>
                    <ul>Videos</ul>
                    <ul>News</ul>
                </li>
                 <li>
                    <ul class="title"> DC COMICS</ul>
                    <ul>Characters</ul>
                    <ul>Comics</ul>
                    <ul>Movies</ul>
                    <ul>TV</ul>
                    <ul>Games</ul>
                    <ul>Videos</ul>
                    <ul>News</ul>
                </li>
            <img class="imgfoot"src="logo_dc_footer"alt=""/>
            </div>
            <div class="foot">
                 <button>SIGN-UP NOW</button>
                 
                <p class="text-foot">FOLLOW UP</p>
               <img src={fb} alt=""/>
               <img src={yt} alt=""/>
            <img src={periscope} alt=""/>
            <img src={pinterest} alt=""/>
            <img src={twitter} alt=""/>
            </div>

           
            </footer>
             
    )
}