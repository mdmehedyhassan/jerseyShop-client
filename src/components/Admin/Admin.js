import React from 'react';
import AddJersey from '../AddJersey/AddJersey';
import ManageJersey from '../ManageJersey/ManageJersey';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Admin = () => {
    return (
        <div>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/manageJersey">Manage Jersey</Link>
                        </li>
                        <li>
                            <Link to="/addJersey">Add Jersey</Link>
                        </li>
                    </ul>

                    <hr />

                    
                    <Switch>
                        <Route exact path="/addJersey">
                            <AddJersey></AddJersey>
                        </Route>
                        <Route exact path="/manageJersey">
                            <ManageJersey></ManageJersey>
                        </Route>
                    </Switch>
                </div>
            </Router>

            
        </div>
    );
};

export default Admin;