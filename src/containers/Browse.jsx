import React from 'react'
import { Card } from 'components'
import _ from 'lodash'

const BrowseContainer = ({ slides, category }) => {
  console.log('slide', slides)

  return (
    <Card>
      {_.map(slides, (slide, key) => (
        <>
          <Card.Group>
            <Card.Title>{key}</Card.Title>
            <Card.Slide>
              <Card.Item>
                <Card.Poster
                  src="/images/series/children/arthur/small.jpg"
                  alt="poster small"
                />
              </Card.Item>
              {slide.map(value => (
                <Card.Item key={value.id} item={value}>
                  <Card.Poster
                    src={`/images/${category}/${value.genre}/${value.slug}/small.jpg`}
                    alt="poster small"
                  />
                </Card.Item>
              ))}
            </Card.Slide>
          </Card.Group>
        </>
      ))}
    </Card>
  )
}

export default BrowseContainer
