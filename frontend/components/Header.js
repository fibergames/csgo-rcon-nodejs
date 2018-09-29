import {h, Component} from 'preact';
import { Link } from 'preact-router/match';

export default class Header extends Component {
    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        return (

            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link href="/" className="navbar-brand">CSGO Remote</Link>
                <button className="navbar-toggler" type="button" data-target="#navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="/" activeClassName="active" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/match/create" activeClassName="active" className="nav-link">Create Match</Link>
                        </li>

                    </ul>
                </div>
            </nav>

        );
    }
}