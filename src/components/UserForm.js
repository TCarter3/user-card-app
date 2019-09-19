import React from "react";
import { Form, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";

class UserForm extends React.Component {
    state = { 
    firstName: this.props.firstName, 
    lastName: this.props.lastName, 
    onlineName: this.props.onlineName, 
    emailAddress: this.props.emailAddress,
 };


    handleChange = (e, { name, value }) => 
        this.setState({ [name]: value, }
        );

        handleSubmit = (e) => {
            e.preventDefault();
            const user = { ...this.state }
            this.props.updateUser(user);
        };
        


    render() {
        const { firstName, lastName, onlineName, emailAddress  } = this.state;
        return(
            <>
            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                label="First Name"
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
                />
                <Form.Input
                label="Last Name"
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
                />
                <Form.Input
                label="Username"
                type="text"
                name="onlineName"
                value={onlineName}
                onChange={this.handleChange}
                />
                <Form.Input
                label="Email Address"
                type="text"
                name="emailAddress"
                value={emailAddress}
                onChange={this.handleChange}
                />
                <Form.Button>Submit</Form.Button>
            </Form>
            <br/>
            </>
        );
    };
};




const ConnectedUserForm = (props) => {
    return(
        <UserConsumer>
            { user => (
                <UserForm
                {...props}
                firstName={user.firstName}
                lastName={user.lastName}
                onlineName={user.onlineName}
                emailAddress={user.emailAddress}
                updateUser={user.updateUser}
                />
            )}
        </UserConsumer>

    );
};

export default ConnectedUserForm;