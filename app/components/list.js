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
                    <a href="" className="pic">
                        <img src="http://upload-images.jianshu.io/upload_images/1767483-83eb3207ae1d1e65.jpg?imageMogr2/auto-orient/strip%7CimageView2/1/w/300/h/300" alt=""/>
                    </a>
                </div>
        )
    }
}
export  default List