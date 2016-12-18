import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import React, {Component} from 'react';
class Main extends Component {
    constructor() {
        super()
        this.state = {
            inMian: 0
        }
    }

    render() {
        let Inner;
        if (this.state.inMian) {
            Inner = Detail
        } else {
            Inner = List
        }
        return (
            <div className='col-md-7  part' id="main">
                <Navtop/>
                <div className="list row">
                    <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}
                                             transitionAppearTimeout={500} transitionEnterTimeout={500}
                                             transitionLeaveTimeout={500}>
                        <Inner ></Inner>
                    </ReactCSSTransitionGroup>
                </div>
            </div>
        )
    }
}
export default Main