import React from 'react'
import PropTypes from 'prop-types'
import Hover from './Hover'

const styles = {
    container: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    tooltip: {
        boxSizing: 'border-box',
        position: 'absolute',
        width: '160px',
        bottom: '100%',
        left: '50%',
        marginLeft: '-80px',
        borderRadius: '3px',
        backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
        padding: '7px',
        marginBottom: '5px',
        color: 'rgba(255,255,255,0.87)',
        textAlign: 'center',
        fontSize: '12px',
    }
}

export default function Tooltip({ text, children }) {
    return (
        <Hover>
            {(hovering) => (
                <div style={styles.container}>
                    {hovering === true && <div style={styles.tooltip}>{text}</div>}
                    {children}
                </div>
            )}
        </Hover>
    )
}

Tooltip.propTypes = {
    text: PropTypes.string.isRequired,
}