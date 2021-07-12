import React from 'react'

function getMonthName(monthVar) {
    const d = new Date();
    d.setMonth(monthVar - 1);
    const monthName = d.toLocaleString('default', { month: 'short' });
    return monthName;
}

const Menu = ({ menuItem }) => {
    return (
        <div className='allWrap'>
            {
                menuItem.sort().map((item) => {
                    return <div className="item-con" key={item.id}>
                        <div className="item-container">
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                            <small>{getMonthName(item.publishedDate.slice(5, 7))}</small>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Menu
