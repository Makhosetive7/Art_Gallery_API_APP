import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetFilterByNameQuery } from '../services/bobsburgersAPI'

const SearchedCharacter = () => {
    const {name} = useParams()

    const {
        data: bobBurger= [],
        isLoading,
        isFetching,
        error,
      } = useGetFilterByNameQuery(name);

      if (isLoading || isFetching) {
        return <div>hello</div>;
      }
      if (error) {
        return <div>error</div>;
      }
  return (
    <div>
      hello{name}
    </div>
  )
}

export default SearchedCharacter
