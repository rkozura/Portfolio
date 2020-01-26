import React from 'react';

import RobNav from './rob-nav';
import RobCarousel from './rob-carousel';

export default class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {activeIndex: 0};

        this.changeActiveIndex = this.changeActiveIndex.bind(this);
    }

    changeActiveIndex(index, event) {
        event.preventDefault();
        this.setState({
            activeIndex: index
        });
    }

    render() {
        return (
            <div>
                <RobNav selectNavHandler={this.changeActiveIndex}/>
                <RobCarousel activeIndex={this.state.activeIndex}/>
            </div>
        );
    }
}
