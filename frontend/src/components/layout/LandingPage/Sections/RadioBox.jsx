import React, { useState } from 'react'
import { Collapse, Radio } from 'antd'

const { Panel } = Collapse

export const RadioBox = ({ list, handleFilters }) => {
  const [values, setValues] = useState()

  const renderRadioBox =
    list &&
    list.map(({ _id: id, name }) => (
      <div key={id}>
        <Radio value={`${id}`}>{name}</Radio>
      </div>
    ))

  const handleChange = event => {
    setValues(event.target.value)
    handleFilters(event.target.value)
  }

  return (
    <Collapse defaultActiveKey={['0']}>
      <Panel header="price" key="1">
        <Radio.Group onChange={handleChange} value={values}>
          {renderRadioBox}
        </Radio.Group>
      </Panel>
    </Collapse>
  )
}
