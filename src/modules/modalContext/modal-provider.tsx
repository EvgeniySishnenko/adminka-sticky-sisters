import React, { useState, useRef } from "react"
import { ModalContext } from "./modal-context"

const ModalProvider: React.FC = (props) => {
  const [step, setStep] = useState<string | undefined>("")
  const [open, setOpen] = useState(false)
  const [data, setData] = useState()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const stepRef = useRef()

  // const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(null)
  //   setOpen(!open)
  //   setStep(event.currentTarget.dataset.step)
  // }

  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  return (
    <ModalContext.Provider
      value={{
        setOpen,
        open,
        data,
        setData,
        // handleClose,
        // handleMenuItemClick,
        // step,
        // anchorEl,
        // setAnchorEl,
        // setStep,
        // stepRef,
      }}
    >
      {props.children}
    </ModalContext.Provider>
  )
}
export { ModalProvider }
