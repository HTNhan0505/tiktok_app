import Header from '~/Components/Layout/Components/Header';
import Sidebar from './SideBar';

function DefaultLayout({ children }) {
    return (
        <dive>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </dive>
    );
}

export default DefaultLayout;
