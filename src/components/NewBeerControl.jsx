import React from 'react';
import EmployeeAuthentication from './EmployeeAuthentication';
import PropTypes from "prop-types";
import NewBeerForm from './NewBeerForm';

class NewBeerControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
        this.handleDisplayForm = this.handleDisplayForm.bind(this);
    }

    handleDisplayForm() {
        this.setState({ formVisibleOnPage: true });
    }

    render() {
        let currentlyVisibleContent = null;
        if (this.state.formVisibleOnPage) {
            currentlyVisibleContent = <NewBeerForm
              onSubmitAddNewBeer={this.props.onSubmitAddNewBeer} />
        } else {
            currentlyVisibleContent = <EmployeeAuthentication 
              onSubmitAuthentication={this.handleDisplayForm} />
        }

        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

NewBeerControl.proptypes = {
    onSubmitAddNewBeer: PropTypes.func
}

export default NewBeerControl;