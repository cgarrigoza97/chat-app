import { useState } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineSearch, AiOutlineLoading3Quarters } from 'react-icons/ai'
import { IoIosClose } from 'react-icons/io'
import { CustomButton } from '../CustomButton/CustomButton'
import styles from './InputSearch.module.css'

export const InputSearch = () => {

  // TODO: manejar icono de carga

  const [inputFocus, setInputFocus] = useState(false)

  // TODO: verificar como refactorizar
  const [inputValue, setInputValue] = useState('')

  const handleFocus = () => {
    setInputFocus(true)
  }

  const handleBlur = () => {
    setInputFocus(false)
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const handleDelete = () => {
    setInputValue('')
  }

  return (
    <div className={`${styles.inputSearchWrapper} ${inputFocus && styles.inputSearchWrapperFocus}`}>
      <IconContext.Provider value={{ 
        color: inputFocus ? 'var(--highlight-color)' : 'var(--gray)', 
        size: '1.4em',
        style: { marginRight: '0.4em' }
      }}>
        <AiOutlineSearch />
      </IconContext.Provider>

      <input
        type='text'
        placeholder='Search'
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      {/* <IconContext.Provider value={{ 
        color: inputFocus ? 'var(--highlight-color)' : 'var(--gray)', 
        size: '1.5em',
        style: { marginRight: '0.4em' },
        className: 'rotating'
      }}>
        <AiOutlineLoading3Quarters />
      </IconContext.Provider> */}
      
      {
        inputValue.length > 0 && 
          <CustomButton onClick={handleDelete}>
            <IconContext.Provider value={{ 
              size: '1.8em',
              color: 'rgb(var(--gray-2))' 
            }}>
              <IoIosClose />
            </IconContext.Provider>
          </CustomButton>
      }
    </div>
  ) 
}
