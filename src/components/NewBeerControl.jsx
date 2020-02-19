import React from 'react';
import ConfirmationQuestions from './EmployeeAuthentication';
import NewTicketForm from './NewBeerForm';
import PropTypes from "prop-types";
import NewBeerForm from './NewBeerForm';

class NewBeerControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formVisibleOnPage: false
        };
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
            currentlyVisibleContent = <EmployeeAuthentication />
            //   onSubmitAuthentication={this.handleDisplayForm} 
        }

        return (
            <div>
                {currentlyVisibleContent}
            </div>
        );
    }
}

NewBeerControl.proptypes = {
    onSubmitAuthentication: PropTypes.func
}

export default NewBeerControl;