import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'
function Tabs(props) {
    const propTypes = {
        children: PropTypes.instanceOf(Array).isRequired
    }

    let element = props.children
    const [activeTab, setActiveTab] = useState({
        activeTab: element[0].props.label
    })

    const onClickTabItem = (tab) => {
        console.log(tab)
        setActiveTab({ activeTab: tab })
    }

    return (

        <div>
            <ol className="tab-list">
                {element.map((child) => {
                    const { label } = child.props;
                    return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            onClick={onClickTabItem}
                        />
                    )
                })}
            </ol>
            <div className="tab-content">
                {element.map((child, i) => {
                    if (child.props.label !== activeTab.activeTab) {
                        return ""
                    } else {
                        return child.props.children
                    }
                })}
            </div>
        </div>
    )
}



export default Tabs

