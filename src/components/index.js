import {
    Link,
    Route,
    Switch,
    useParams,
    useRouteMatch
} from "react-router-dom";
import React from "react";

import { Clock } from './clock-0.1.jsx';

export default function MyComponents() {
    let match = useRouteMatch();

    return (
        <div>
            <h2>Components</h2>

            <ul>
                <li>
                    <Link to={`${match.url}/clock`}>My first clock</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>
                        Props v. State
                    </Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${match.path}/clock`}>
                    <Clock />
                </Route>
                <Route path={`${match.path}/:topicId`}>
                    <Topic />
                </Route>
                <Route path={match.path}>
                    <h3>Please select a topic.</h3>
                </Route>
            </Switch>
        </div>
    );
}

function Topic() {
    let { topicId } = useParams();
    return <h3>Requested topic ID: {topicId}</h3>;
}