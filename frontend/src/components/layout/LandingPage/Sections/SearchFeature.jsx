import React, { useState } from 'react'
import { Input } from 'antd'

const { Search } = Input

export const SearchFeature = ({ refreshFunction }) => {
  const [searchTerms, setSearchTerms] = useState('')

  const onChangeSearch = event => {
    setSearchTerms(event.currentTarget.value)
    refreshFunction(event.currentTarget.value)
  }

  return (
    <>
      <Search
        value={searchTerms}
        onChange={onChangeSearch}
        placeholder="Search by Typing..."
      />
    </>
  )
}
