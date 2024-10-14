import 'bootstrap/dist/css/bootstrap.min.css';

const date = new Date()

function Footer() {
    return (
        <footer class="bg-dark fixed-bottom text-start">
            <p class="m-2" style={{fontSize: 0.6+'rem'}}>&copy; 2022-{date.getFullYear()} Radiowęzeł VIII Liceum Ogólnokształcącego im. KEN w Gdańsku&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;Made by Maciej Morgaś & Maciej Tkaczewski</p>
        </footer>
    );
}

export default Footer;