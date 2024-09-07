import 'bootstrap/dist/css/bootstrap.min.css';

const date = new Date()

function Footer() {
    return (
        <footer class="container text-start mt-5 pt-5">
            <p style={{fontSize: 0.75+'rem'}}>&copy; 2022-{date.getFullYear()} Radiowęzeł VIII Liceum Ogólnokształcącego im. KEN w Gdańsku&nbsp;&nbsp;&nbsp;&bull;&nbsp;&nbsp;&nbsp;Made by Maciej Morgaś</p>
        </footer>
    );
}

export default Footer;