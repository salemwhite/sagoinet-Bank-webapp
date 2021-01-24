import React from 'react'
import { Redirect } from 'react-router-dom'
import { reactLocalStorage} from './reactjs-localstorage/react-localstorage'
class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = reactLocalStorage.get('authenticated')
       
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/login' }} />
        );
    }
}

export default ProtectedRoute;