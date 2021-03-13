import React, { useState } from "react"
import { Pagination } from "react-bootstrap/"
import { IPaginationProps } from "@root/shared/Pagination/models/pagination.props"
const PaginationContainer: React.FC<IPaginationProps> = ({
  paginationCount,
  type,
  activeNum,
  setActiveNum,
  actionRequest,
}) => {
  const round = Math.ceil(paginationCount / 30)
  const count = new Array(round).fill("").map((_, index) => index + 1)
  const handlerButtonClick = (action: string) => {
    switch (action) {
      case "First":
        if (activeNum === 1) return
        setActiveNum(1)
        actionRequest(1)
        break
      case "Prev":
        let prevNum: number = 0
        if (activeNum === 1) return
        if (activeNum > 1) prevNum = activeNum - 1
        setActiveNum(prevNum)
        actionRequest(prevNum)
        break
      case "Next":
        let nextNum: number = 0
        if (activeNum === count[count.length - 1]) return
        if (activeNum < count[count.length - 1]) nextNum = activeNum + 1
        setActiveNum(nextNum)
        actionRequest(nextNum)
        break
      case "Last":
        if (activeNum === count[count.length - 1]) return
        setActiveNum(count[count.length - 1])
        actionRequest(count[count.length - 1])
        break
      default:
        break
    }
  }
  return (
    <Pagination>
      <Pagination.First
        key={`First_${type}`}
        onClick={() => handlerButtonClick("First")}
      />
      <Pagination.Prev
        key={`Prev${type}`}
        onClick={() => handlerButtonClick("Prev")}
      />
      {count.map((num: number) => (
        <Pagination.Item
          key={`${num}_${type}`}
          active={activeNum === num && true}
          onClick={() => {
            setActiveNum(num)
            actionRequest(num)
          }}
        >
          {num}
        </Pagination.Item>
      ))}

      <Pagination.Next
        key={`Next${type}`}
        onClick={() => handlerButtonClick("Next")}
      />
      <Pagination.Last
        key={`Last${type}`}
        onClick={() => handlerButtonClick("Last")}
      />
    </Pagination>
  )
}
export default PaginationContainer
