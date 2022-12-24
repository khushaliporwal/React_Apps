import React from 'react'

export default function ColourPalette(props) {
  return (
    props.color && <div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
            <label className="form-check-label" forhtml="inlineRadio1">{props.color.red}</label>
        </div>
        <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className="form-check-label" forhtml="inlineRadio2">{props.color.blue}</label>
        </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" forhtml="inlineRadio3">{props.color.green}</label>
        </div>
    </div>
  )
}
