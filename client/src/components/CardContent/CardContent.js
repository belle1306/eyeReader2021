import React from 'react';

class CardContent extends React.Component {
    render() {
        const { data } = this.props
        return (
            <div className="ui card">
                <div className="image">
                    {
                        data.avatar && 
                        <img src={data.avatar} alt={`author-${data.id}`} />
                    }
                </div>
                <div className="content">
                    <p className="header">{data.name}</p>
                    <div className="meta">
                        <span className="date">Joined in 2019</span>
                    </div>
                    <div className="description">
                        {data.email}
                    </div>
                </div>
                <div className="extra content">
                    <a>
                        <i className="user icon"></i>
                        {`${data.id+25} books written.`}
                    </a>
                </div>
            </div>
        )
    }
}

export default CardContent;
