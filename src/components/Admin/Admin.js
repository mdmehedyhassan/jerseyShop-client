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
                <div className="d-flex row">
                    <div className="bg-dark text-light col-md-6 p-5">
                        <ul>
                            <li>
                                <Link className="text-light p-2" to="/manageJersey">Manage Jersey</Link>
                            </li>
                            <li>
                                <Link className="text-light p-2" to="/addJersey">Add Jersey</Link>
                            </li>
                        </ul>
                    </div>

                    <hr />
                    <div className="col-md-6">
                        <Switch>
                            <Route exact path="/addJersey">
                                <AddJersey></AddJersey>
                            </Route>
                            <Route exact path="/manageJersey">
                                <ManageJersey></ManageJersey>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>


        </div>
    );
};

export default Admin;