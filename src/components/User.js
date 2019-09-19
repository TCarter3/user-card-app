import React from "react";
import { Card, Icon, Image, Container, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";
import myImage from "../images/dog.jpeg";
import styled from "styled-components";



const User = () => (
    <>
        <UserConsumer>
            {user => (
                <Card>
                    <Image src={ myImage } />
                    <Card.Content>
                        <StyleHeader>
                            <Card.Header >{user.firstName} {user.lastName}</Card.Header>
                        </StyleHeader>
                        
                        <Card.Meta>
                            Username: {user.onlineName}
                        </Card.Meta>
                        <br />
                        <Card.Description>
                            <h4>{user.emailAddress}</h4>
                        </Card.Description>
                    </Card.Content>
                </Card>
            )}
        </UserConsumer>
    </>
);

const StyleHeader = styled.div`
    color: darkblue;
    font-size: 3rem;
    padding-bottom: 15px;
`;


export default User;