const RouteGuard = ({ component: Component, isLoggedIn, restricted = true, redirectRoute = "/login", ...rest }) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isLoggedIn && restricted ?
                <Redirect to={redirectRoute} />
                : <Component {...props} />
        )} />
    );
};

export default RouteGuard;