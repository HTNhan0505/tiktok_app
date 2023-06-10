import Header from '~/Components/Layout/Components/Header';

function HeaderOnly({ children }) {
    return (
        <dive>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </dive>
    );
}

export default HeaderOnly;
