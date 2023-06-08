import Header from '~/Components/Layout/Components/Header';

function DefaultLayout({ children }) {
    return (
        <dive>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </dive>
    );
}

export default DefaultLayout;
