import dc_logo from '../assets/img/dc-logo.png'
export default function AppHeader() {

    return (
        <header>
            <img src={dc_logo} alt="" />
            <nav>

                <a>CHARACTERS</a>
                
                <a class ="on">COMICS</a>
                <a>MOVIES</a>
                <a>TV</a>
                <a>GAMES</a>
                <a>COLLECTIBLES</a>
                <a>VIDEOS</a>
                <a>FANS</a>
                <a>NEWS</a>
                <a>SHOP</a>
            </nav>


        </header>
    )
}