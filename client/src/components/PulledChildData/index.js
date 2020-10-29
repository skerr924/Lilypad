import React, {useState, useEffect} from "react";
import API from "../../utils/ChildAPI";
var avatarDirectory = process.env.PUBLIC_URL + "/assets/images/boy_darkhair.png";

function PulledData(){

    const [childData, setChildData] = useState([]);

    // loads child information and strores them with setChildData
    useEffect(() => {
        loadChildData()
      }, [])

      useEffect(() => {
        console.log(childData)
      }, [childData])

    function loadChildData() {
        API.getChildren()
        
        .then(res =>
            setChildData(res.data)
            )
            
            .catch(err => console.log(err));
    }

    return  <div className="stackable ui grid container childData">
        {childData.map(child => (
    <div className="five wide column" key={child.id}>
        <center>
        <h2 className="ui header">
            <img
            src={avatarDirectory}
            className="ui circular image"
            alt="avatar"
            />
            {child.firstName}
        </h2>

        <div className="ui list">
            <div className="item">
            <div className="header">Allergies</div>
            {child.allergies}
            </div>
            <div className="item">
            <div className="header">Bedtime</div>
            {child.bedtime}
            </div>
            <div className="item">
            <div className="header">Favorite food</div>
            {child.favoriteFood}
            </div>
            <div className="item">
            <div className="header">Favorite activity</div>
            {child.favoriteActivity}
            </div>
        </div>
        </center>
    </div>
        ))}
    </div>

}

export default PulledData;