function AppLayout({children, title}) {
if (title) {
    document.title = title;
}

    return (
        <>
          <p>le header</p>
            {children}
            <p>le footer</p>
        </>
        
    )
}

export default AppLayout