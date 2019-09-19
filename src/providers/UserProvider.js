import React from "react";

// Set up initial CONTEXT which will have a CONSUMER and a PROVIDER
const UserContext = React.createContext();

// create a CONSUMER
export const UserConsumer = UserContext.Consumer;

// create a PROVIDER
class UserProvider extends React.Component {
    state = {
        firstName: "Travis",
        lastName: "Carter",
        onlineName: "Just Debby",
        emailAddress: "carter.travis94@gmail.com",
        
    };

    updateUser = (user) => this.setState({ ...user, });
    



    render() {
        return (
            <UserContext.Provider 
            value={{ 
                ...this.state,
                updateUser: this.updateUser,
            }}>>
                {this.props.children}
            </UserContext.Provider>

        );
    };
};

export default UserProvider;