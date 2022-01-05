import React from "react";
import { Button } from "./Button.styled";

class ButtonLoadMore extends React.Component {

    handleClick = () => {
        this.props.onClick(true);
    };
    
    render() {
        return (
            <Button type="button" onClick={this.handleClick}>Load more</Button>
        )}
}

export default ButtonLoadMore;