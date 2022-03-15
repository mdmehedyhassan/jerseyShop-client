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
                <div className="row">
                    <div className="bg-dark text-light col-xl-2 col-md-3 col-sm-4 p-3">
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
                    <div className="col-xl-10 col-md-9 col-sm-8">
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