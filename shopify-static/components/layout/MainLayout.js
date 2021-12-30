const MainLayout = (props) => {

    return (
        <>
            <header>This is my header</header>
            <main>{props.children}</main>
            <footer>This is my footer</footer>
        </>
    )
}

export default MainLayout;