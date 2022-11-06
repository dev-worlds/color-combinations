import React, {useEffect, useState} from "react";
import {hexToHsl} from "../js/helper";
import {card, container, containerInner} from "../styles";

const ColorCombination = () => {

    const [colorCombinations, setColorCombinations] = useState([])
    const [count, setCount] = useState(5)
    const [saturation, setSaturation] = useState(0)
    const [lightness, setLightness] = useState(7)
    const [color, setColor] = useState('#FF0000')
    const handleChangeCount = (e) => {
        setCount(+e.target.value)
    }
    const handleChangeLightness = (e) => {
        setLightness(+e.target.value)
    }
    const handleChangeSaturation = (e) => {
        setSaturation(+e.target.value)
    }
    const handleChangeColor = (e) => {
        setColor(e.target.value)
    }

    useEffect(() => {
        generateColors();
    }, [count, saturation, lightness, color])

    const generateColors = () => {
        const colorsInit = hexToHsl(color);
        let incrementSaturation = 10 - saturation;
        let incrementLightness = lightness;
        const newColorList = [];
        if (colorsInit[1] > 50) {
            incrementSaturation = -10 + saturation;
        }
        for (let i = 0; i <= count - 1; i++) {
            colorsInit[1] += incrementSaturation;
            colorsInit[2] += +incrementLightness;
            newColorList.push([colorsInit[0], colorsInit[1], colorsInit[2]]);
        }
        setColorCombinations(newColorList)
    }

    return (
        <>
            <div className="d-flex justify-content-center p-3" style={container()}>
                <div className="row mw-100" style={containerInner()}>
                    <div className="col-6">
                        {colorCombinations.map((colors, index) => (<div key={index} style={card(colors)}></div>))}
                    </div>
                    <div className="col-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="count"
                                       className="form-label">Количество</label>
                                <input type="range" className="form-range" id="count" min="3" max="8" value={count}
                                       onInput={handleChangeCount}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lightness"
                                       className="form-label">Насыщенность</label>
                                <input type="range" className="form-range" id="saturation" min="-7" max="7" step="0.2"
                                       value={saturation}
                                       onInput={handleChangeSaturation}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lightness"
                                       className="form-label">Яркость</label>
                                <input type="range" className="form-range" id="lightness" min="4" max="10" step="0.2"
                                       value={lightness}
                                       onInput={handleChangeLightness}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="color" className="form-label">Цвет</label>
                                <input type="color"
                                       className="form-range"
                                       id="color"
                                       value={color}
                                       onInput={handleChangeColor}/>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>)
}

export default ColorCombination;
