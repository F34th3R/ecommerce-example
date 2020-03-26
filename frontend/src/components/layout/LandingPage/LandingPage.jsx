import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { Col, Card, Row } from 'antd'
import { RocketOutlined } from '@ant-design/icons'

import {
  LandingContainer,
  LandingTextAling,
  LandingSearchContainer,
  ProductContainer,
  PostSizeContainer
} from './style/LandingPageStyled'
import { CheckBox, SearchFeature, RadioBox } from './Sections'

import { continents, price } from './Sections'

import { ImageSlider } from '../../utils/ImageSlider/ImageSlider'

const { Meta } = Card

export const LandingPage = () => {
  const [products, setProducts] = useState([])
  const [skip, setSkip] = useState(0)
  const [limit, setLimit] = useState(8)
  const [postSize, setPostSize] = useState()
  const [searchTerms, setSearchTerms] = useState('')

  const [filters, setFilters] = useState({
    continents: [],
    price: []
  })

  useEffect(() => {
    const variables = {
      skip,
      price
    }
    getProducts(variables)
  }, [])

  const getProducts = async variables => {
    const response = await Axios({
      method: 'POST',
      url: '/api/product/getProducts',
      data: variables
    })
    if (response.data.success) {
      if (variables.loadMore) {
        setProducts([...getProducts, ...(await response).data.products])
      } else {
        setProducts(response.data.products)
      }
      setPostSize(response.data.postSize)
    } else {
      alert('Failed to fectch product datas')
    }
  }

  const onLoadMore = () => {
    let skipLimit = skip + limit
    const variables = {
      skipLimit,
      limit,
      loadmore: true
    }
    getProducts(variables)
    setSkip(skipLimit)
  }

  const showFilterResults = filters => {
    const variables = {
      skip: 0,
      limit,
      filters
    }
    getProducts(variables)
    setSkip(0)
  }

  const handlePrice = value => {
    const data = price
    let array = []
    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array
      }
    }
    return array
  }

  const handleFilters = (filter, category) => {
    const newFilters = { ...filters }

    newFilters[category] = filter

    if (category === 'price') {
      let priceValue = handlePrice(filter)
      newFilters[category] = priceValue
    }

    showFilterResults(newFilters)
    setFilters(newFilters)
  }

  const updateSearchTerms = newSearchTerm => {
    const variables = {
      skip: 0,
      limit,
      filters,
      searchTerm: newSearchTerm
    }
    setSkip(0)
    setSearchTerms(newSearchTerm)
    getProducts(variables)
  }

  const renderCards = products.map((product, index) => (
    <Col lg={6} md={8} xs={24} key={index}>
      <Card
        hoverable={true}
        cover={
          <a href={`/product/${product._id}`}>
            {' '}
            <ImageSlider images={product.images} />
          </a>
        }
      >
        <Meta title={product.title} description={`$${product.price}`} />
      </Card>
    </Col>
  ))

  return (
    <LandingContainer>
      <LandingTextAling>
        <h2>
          Let's Travel Anywhere <RocketOutlined />
        </h2>
      </LandingTextAling>

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <CheckBox
            list={continents}
            handleFilters={filter => handleFilters(filter, 'continents')}
          />
        </Col>
        <Col lg={12} xs={24}>
          <RadioBox
            list={price}
            handleFilters={filter => handleFilters(filter, 'price')}
          />
        </Col>
      </Row>

      <LandingSearchContainer>
        <SearchFeature refreshFunction={updateSearchTerms} />
      </LandingSearchContainer>

      {products.length === 0 ? (
        <ProductContainer>
          <h2>No post yet...</h2>
        </ProductContainer>
      ) : (
        <>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </>
      )}
      <br />
      <br />
      {postSize >= limit && (
        <PostSizeContainer>
          <button onClick={onLoadMore}>Load More</button>
        </PostSizeContainer>
      )}
    </LandingContainer>
  )
}
