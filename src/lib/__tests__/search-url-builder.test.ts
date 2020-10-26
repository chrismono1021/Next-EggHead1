import {titleFromPath, createUrl, parseUrl} from '../search-url-builder'
import config from '../config'

test('Builds a Title Based on single Tag and Instructor', () => {
  const title = titleFromPath(['react-content-by-kent-c-dodds'])

  expect(title).toBe(
    `${config.searchResultCount} React Courses from Kent C. Dodds in 2020`,
  )
})

test('creates a url from an empty search state', () => {
  const url = createUrl({})

  expect(url).toBe('/s')
})

test('creates a url with a query with single tag and instructor named Kent C. Dodds', () => {
  const url = createUrl({
    query: 'hooks',
    refinementList: {
      instructor_name: ['Kent C. Dodds'],
      _tags: ['react'],
    },
  })

  expect(url).toBe('/s/react-content-by-kent-c-dodds?q=hooks')
})

test('creates a url with a query with single tag and instructor filtered by type', () => {
  const url = createUrl({
    query: 'hooks',
    refinementList: {
      instructor_name: ['Kent C. Dodds'],
      _tags: ['react'],
      type: ['course'],
    },
  })

  expect(url).toBe('/s/react-content-by-kent-c-dodds?q=hooks&type=course')
})

test('creates a url with a query with single tag and instructor filtered by multiple types', () => {
  const url = createUrl({
    query: 'hooks',
    refinementList: {
      instructor_name: ['Kent C. Dodds'],
      _tags: ['react'],
      type: ['course', 'podcast'],
    },
  })

  expect(url).toBe(
    '/s/react-content-by-kent-c-dodds?q=hooks&type=course%2Cpodcast',
  )
})

test('creates a url with a query with single tag and instructor named Kent C. Dodds', () => {
  const url = createUrl({
    refinementList: {
      instructor_name: ['Kent C. Dodds'],
      _tags: ['react'],
    },
  })

  expect(url).toBe('/s/react-content-by-kent-c-dodds')
})

test('creates a url with instructor named Kent C. Dodds', () => {
  const url = createUrl({
    refinementList: {
      instructor_name: ['Kent C. Dodds'],
    },
  })

  expect(url).toBe('/s/content-by-kent-c-dodds')
})

test('creates a url with a query with single tag and instructor not named Kent C. Dodds', () => {
  const url = createUrl({
    refinementList: {
      instructor_name: ['Ceora Ford'],
      _tags: ['react'],
    },
  })

  expect(url).toBe('/s/react-content-by-ceora-ford')
})

test('creates a url multiple tags', () => {
  const url = createUrl({
    refinementList: {
      _tags: ['react', 'redux'],
    },
  })

  expect(url).toBe('/s/react-and-redux')
})

test('creates a url single instructor', () => {
  const url = createUrl({
    refinementList: {
      instructor_name: ['Ceora Ford'],
    },
  })

  expect(url).toBe('/s/content-by-ceora-ford')
})

test('parses empty', () => {
  const searchParams = parseUrl({})

  expect(searchParams).toEqual({})
})

test('parses a url tag and instructor', () => {
  const searchParams = parseUrl({
    all: ['react-content-by-kent-c-dodds'],
  })

  expect(searchParams).toEqual({
    refinementList: {_tags: ['react'], instructor_name: ['Kent C. Dodds']},
  })
})

test('parses a url with only instructor', () => {
  const searchParams = parseUrl({
    all: ['content-by-kent-c-dodds'],
  })

  expect(searchParams).toEqual({
    refinementList: {_tags: [], instructor_name: ['Kent C. Dodds']},
  })
})

test('parses a url from tag', () => {
  const searchParams = parseUrl({
    all: ['react'],
  })

  expect(searchParams).toEqual({
    refinementList: {_tags: ['react']},
  })
})

test('parses a url from two tag', () => {
  const searchParams = parseUrl({
    all: ['react-and-redux'],
  })

  expect(searchParams).toEqual({
    refinementList: {_tags: ['react', 'redux']},
  })
})

test('parses a url tag and multiple instructors', () => {
  const searchParams = parseUrl({
    all: ['react-content-by-kent-c-dodds-and-ceora-ford'],
  })

  expect(searchParams).toEqual({
    refinementList: {
      _tags: ['react'],
      instructor_name: ['Kent C. Dodds', 'Ceora Ford'],
    },
  })
})

test('parses a url tag and instructor and query', () => {
  const searchParams = parseUrl({
    q: 'react hooks',
    all: ['react-content-by-kent-c-dodds'],
  })

  expect(searchParams).toEqual({
    refinementList: {_tags: ['react'], instructor_name: ['Kent C. Dodds']},
    query: 'react hooks',
  })
})

test('parses a url tag and instructor types and query', () => {
  const searchParams = parseUrl({
    q: 'react hooks',
    type: 'course,podcast',
    all: ['react-content-by-kent-c-dodds'],
  })

  expect(searchParams).toEqual({
    query: 'react hooks',
    refinementList: {
      _tags: ['react'],
      instructor_name: ['Kent C. Dodds'],
      type: ['course', 'podcast'],
    },
  })
})

test('parse a url with just the query string', () => {
  const searchParams = parseUrl({
    type: 'playlist,course',
  })

  expect(searchParams).toEqual({
    refinementList: {
      _tags: [],
      type: ['playlist', 'course'],
    },
  })
})
