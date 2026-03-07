import dc_logo from '../assets/img/dc-logo.png'
export default function AppHeader() {

    return (
        <header>
           <img src ={dc_logo} alt =""/>
            <li>
                <ul>CHARACTERS</ul>
                <ul>COMICS</ul>
                <ul>MOVIES</ul>
                <ul>TV</ul>
                <ul>GAMES</ul>
                <ul>COLLECTIBLES</ul>
                <ul>VIDEOS</ul>
                <ul>FANS</ul>
                <ul>NEWS</ul>
                <ul>SHOP</ul>

            </li>
        </header>
    )
}