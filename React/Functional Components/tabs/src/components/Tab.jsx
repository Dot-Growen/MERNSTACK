import React from 'react'
import PropTypes from 'prop-types'

function Tab(props) {

    const onClick = () => {
        const {label, onClick} = props
        
        onClick(label)
    }

    const { activeTab, label } = props
    let className = "tab-list-item"

    if (activeTab.activeTab === label){
        className = "tab-list-active"
    }

    return (
        <li className={className} onClick={onClick} >
            {label}
        </li>
    )
}

export default Tab