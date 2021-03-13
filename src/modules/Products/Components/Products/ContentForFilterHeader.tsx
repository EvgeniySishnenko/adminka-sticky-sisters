import React, { useCallback, useEffect, useRef, useState } from "react"
import {
  Accordion,
  Button,
  Dropdown,
  Form,
  FormControl,
  Overlay,
  Popover,
} from "react-bootstrap"
import { useTypedSelector } from "@root/hooks/useTypedSelector"
import { useActions } from "@root/hooks/useActions"
import { useInput } from "@root/hooks/useInput"
import { IContentForFilterHeader } from "@root/modules/Products/models/interfaces/products.props"
import "@root/modules/Products/styles/ContentForFilterHeader.styl"

export const ContentForFilterHeader: React.FC<IContentForFilterHeader> = ({
  setActiveNum,
}) => {
  const [arrayID, setArrayID] = useState<string[]>([])
  const [show, setShow] = useState(false)
  const [target, setTarget] = useState(null)
  const { categories, type, filterArrayCatId, searchValue } = useTypedSelector(
    (state) => state.products
  )
  const {
    filterCatArrayID,
    searchProductsRequest,
    resetCatArrayID,
    resetSearchValue,
  } = useActions()
  const ref = useRef(null)

  const { setValue, ...search } = useInput("")
  const handlerSearch = () => {
    const val = String(search.value)
    if (val.length > 0) {
      if (filterArrayCatId.length > 0) {
        setArrayID([]) // сбрасываем массив id категорий в стейте компоненте
        resetCatArrayID() // сбрасываем массив id категорий в сторе
      }
      searchProductsRequest(search.value) // отправляем запрос на сервер со строкой поиска
    }
  }

  const handlerReset = () => {
    if (search.value !== "") {
      resetSearchValue() // сбрасываем в сторе значения из поля поиска
      setValue("") // очищаем поле поска
      filterCatArrayID([]) // после сброса делаем запрос на сервер за товарами
    }
  }
  const handleClickSelectCategory = (event: any) => {
    setShow(!show)
    setTarget(event.target)
  }
  const onClickChkBox = useCallback(
    (id: string) => {
      const newArrayID: string[] = arrayID
      let index: number = newArrayID?.findIndex((itemID) => itemID === id)
      index += 1
      if (index > 0) {
        const filterArr = newArrayID.filter((itemId: string) => itemId !== id)
        setArrayID([...filterArr])
      } else {
        newArrayID!.push(id)
        setArrayID([...newArrayID!])
      }
    },
    [arrayID]
  )
  useEffect(() => {
    if (arrayID.length > 0) filterCatArrayID(arrayID)
    if (searchValue !== null && search.value !== "" && arrayID.length > 0) {
      console.log(arrayID.length)
      resetSearchValue() // сбрасываем в сторе значения из поля поиска
      setValue("") // очищаем поле поска
    }
    setActiveNum(1)
  }, [arrayID])
  const resetFilterCatArrayID = useCallback(() => {
    filterCatArrayID([]) // сбрасываем в сторе значения из поля поиска и отправялем запрос
    setArrayID([]) // чистим стейт компонента
  }, [])
  return (
    <div className="d-flex w-100 justify-content-between align-items-center">
      <Button variant="link" onClick={handleClickSelectCategory}>
        {filterArrayCatId && filterArrayCatId.length > 0
          ? `${filterArrayCatId.length} категория(и)`
          : "Выбрать категорию"}
      </Button>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref.current}
        containerPadding={20}
      >
        <Popover id="popover-contained" className={"content-for-filter-header"}>
          <Popover.Title as="h3">Выберете категорию</Popover.Title>
          <Popover.Content>
            <Button
              onClick={resetFilterCatArrayID}
              variant="dark"
              size="sm"
              block
              disabled={arrayID.length > 0 ? false : true}
            >
              Сбросить
            </Button>
            {type &&
              type.map((type: any) => (
                <Accordion>
                  <div>
                    <Accordion.Toggle
                      key={`${type.type}_${type.type_id} `}
                      className="filter-header-item"
                      as={Form.Label}
                      eventKey="0"
                    >
                      {type.type}
                    </Accordion.Toggle>
                  </div>
                  <Accordion.Collapse eventKey="0">
                    <>
                      {categories &&
                        categories.map((cat: any) => {
                          if (cat.cat_type_id === type.type_id)
                            return (
                              <Dropdown.Item
                                href={`#/action-${cat.cat_id}`}
                                key={`${cat.categories}_${cat.cat_type_id} `}
                              >
                                <Form.Check
                                  checked={arrayID.includes(cat.cat_id)}
                                  className={"chk-cursor-pointer"}
                                  custom
                                  type={"checkbox"}
                                  id={`custom-${cat.cat_id}`}
                                  label={cat.categories}
                                  onChange={() => {
                                    onClickChkBox(cat.cat_id)
                                  }}
                                />
                              </Dropdown.Item>
                            )
                        })}
                    </>
                  </Accordion.Collapse>
                </Accordion>
              ))}
          </Popover.Content>
        </Popover>
      </Overlay>
      <div className="right">
        <Form inline>
          <FormControl
            {...search}
            type="text"
            placeholder="Название или код"
            className="mr-sm-2"
          />
          <Button onClick={handlerSearch} variant="outline-secondary">
            Найти
          </Button>
          <Button
            className={"ml-2"}
            variant="outline-danger"
            onClick={handlerReset}
          >
            Очистить
          </Button>
        </Form>
      </div>
    </div>
  )
}
