import React from 'react'
import Star from './Star.png'

export default function Card(props){
    let badgeText;
    if (props.x.openSpots === 0){
        badgeText = "Sold Out"
    } else if (props.x.location === "Online"){
        badgeText = "ONLINE"
    };
    return (
        <div className="card">
            {badgeText !== undefined && <div className="card--badge">{badgeText}</div>}
            <img className="card-image" src={props.x.coverImg} alt="Katie Zaferes"></img>
            <div>
                <span className="rating">
                <img src={Star} alt="star" className="star"></img>
                <p>{props.x.stats.rating} ({props.x.stats.reviewCount}) {props.x.location}</p>
                </span>
                <h5 className="comment">{props.x.title}</h5>
                <p className="comment"><strong>From ${props.x.price}</strong> / person</p>
            </div>
        </div>
    )
}