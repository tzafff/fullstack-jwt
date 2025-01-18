import * as React from 'react';
import WelcomeContent from "./WelcomeContent";

// import { request, setAuthHeader } from '../helpers/axios_helper';

// import Buttons from './Buttons';
// import AuthContent from './AuthContent';
// import LoginForm from './LoginForm';

export default class AppContent extends React.Component {
    render() {
        return (
            <div>
                <WelcomeContent />
            </div>
        )
    }
}