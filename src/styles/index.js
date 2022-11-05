const card = (colors) => {
    let style = {
        height: '100px',
        width: '100%'
    };
    if (colors.length) {
        style.backgroundColor = `hsl(${colors[0]}, ${colors[1]}%, ${colors[2]}%)`;
    }
    return style;
}

const container = () => {
    return {
        minHeight: '100vh',
        width: '100%',
    }
}

const containerInner = () => {
    return {
        minWidth: 'max(300px, 20%)'
    }
}

export {card, container, containerInner};
