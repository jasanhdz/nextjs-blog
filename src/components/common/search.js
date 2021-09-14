import styled from 'styled-components'
import { MdSearch, MdClose } from 'react-icons/md'
import { useState } from 'react'
import PropTypes from 'prop-types'
import Router, { useRouter } from 'next/router'

const SearchStyled = styled.form`
  max-width: 320px;
  margin-bottom: 48px;
  .form-fieldset {
    padding: 12px 16px;
    border: 1px solid rgb(139, 141, 141);
    border-radius: 4px;
    box-sizing: border-box;
    height: 48px;
    display: flex;
    align-items: center;
    input {
      margin-left: 10px;
      display: inherit;
      flex-grow: 1;
      font-size: 16px;
      line-height: 24px;
      outline: none;
      font-family: var(--primary);
      border: none;
    }
    .close {
      cursor: pointer;
    }
  }
`

function Search({ initialValue }) {
  const router = useRouter()
  const [value, setValue] = useState(initialValue)
  const onChange = event => setValue(event.target.value)
  const handleClearValue = () => {
    setValue('')
    router.replace('/')
  }
  return (
    <SearchStyled>
      <fieldset className="form-fieldset">
        <MdSearch role="button" size={26} color="#8b8d8d" />
        <input
          onChange={onChange}
          value={value}
          type="text" 
          name="search" 
          autoComplete="false" 
          placeholder="Buscar..." 
        />
        <div className="form-state">
          <MdClose 
            onClick={handleClearValue} 
            className="close" 
            size={24} 
            color="#8b8d8d" 
          />
        </div>
      </fieldset>
    </SearchStyled>
  )
}

Search.defaultProps = {
  initialValue: '',
}

Search.propTypes = {
  initialValue: PropTypes.string,
}

export default Search
