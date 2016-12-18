import React, {Component} from "react"
import {Router, Route, hashHistory ,IndexRedirect,Link} from 'react-router';
const listData= [
    {
        data:'2016-03-12',
        title:'暗恋是一种礼貌',
        info:{
            view:200,
            like:130
        }
    },
    {
        data:'2016-03-12',
        title:'我想给你写封信',
        info:{
            view:200,
            like:130
        }
    },
    {
        data:'2016-03-12',
        title:'暗恋是一种礼貌',
        info:{
            view:200,
            like:130
        }
    },
    {
        data:'2016-03-12',
        title:'我想给你写封信',
        info:{
            view:200,
            like:130
        }
    },
    {
        data:'2016-03-12',
        title:'暗恋是一种礼貌',
        info:{
            view:200,
            like:130
        }
    },
    {
        data:'2016-03-12',
        title:'我想给你写封信',
        info:{
            view:200,
            like:130
        }
    }
]
class List extends Component{
    render(){
        return(
            <div className="row ">
                {
                    listData.map(function (it) {
                        return <Item data={it}/>
                    })
                }
            </div>

        )
    }
}
class Item extends Component{
    render(){
        return(
                <div className="col-md-12 item">
                    <p className="date">2016-10-01</p>
                    <h3 className="title"><Link to="/detail?id=1234">{this.props.data.title}</Link></h3>
                    <p className="info">阅读(234)</p>
                </div>
        )
    }
}
export  default List