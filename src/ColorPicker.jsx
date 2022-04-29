import React from 'react'
import CustomPicker from 'react-color'
import Hue from 'react-color/es/components/common/Hue'
import Saturation from 'react-color/es/components/common/Saturation'

const StyledHuePointer = () => <div></div>

const ColorPicker = ({
  rgb,
  hex,
  onChangeComplete,
  onInputChange,
  ...props
}) => {
  return (
    <div>
      <div>
        <Saturation onInputChange={onInputChange} onChangeComplete={onChangeComplete} {...props} />
      </div>

      <div>
        <div>
          <Hue {...props} pointer={StyledHuePointer} />
        </div>
      </div>
    </div>
  )
}

export default CustomPicker(ColorPicker)