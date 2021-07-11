import React from 'react'

function getMonthName(monthVar) {
    const d = new Date();
    d.setMonth(monthVar - 1);
    const monthName = d.toLocaleString('default', { month: 'short' });
    return monthName;
}

const Buttons = ({ button, filter }) => {
    return (
        <div>
            {/* <button type="button" onClick={() => filter('02')}>February</button> */}
            {
                button.map((month, i) => {
                    return <button type='button' onClick={() => filter(month)} key={i}>{
                        month === 'All' ? month : getMonthName(month)
                    }</button>
                })
            }
        </div>
    )
}

export default Buttons
