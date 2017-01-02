import React, {Component} from "react"
import {Link} from "react-router"
class list extends Component{
    render(){
        return (
            <div className="row"></div>
        )
    }
}
class wrapper extends Component{
    render(){
        return (
            <div className="container-fluid" id="wrapper">
                <div className="row wrapper-row" >
                    <div className="part-left col-md-3">
                    </div>
                    <div className="row-fluid nav-header ">
                        <div className="col-md-6 col-md-offset-3 header">
                            <span className="col-md-2 active">最新</span>
                            <span className="col-md-2"><Link to="/detail">最热</Link></span>
                            <span className="col-md-2">其他</span>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="part-main col-md-6 col-md-offset-3">

                        <div className="clearfix"></div>
                        <div className="col-md-12 list">
                            {this.props.children}
                        </div>
                    </div>
                    <div className="part-right col-md-3"></div>
                </div>
            </div>
        )
    }
}
export {wrapper}