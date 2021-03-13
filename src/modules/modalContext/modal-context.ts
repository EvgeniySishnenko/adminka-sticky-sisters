import React, { createContext } from "react"
import { IModalProps } from "@root/modules/modalContext/modal-props"

export const ModalContext = createContext<Partial<IModalProps>>({})
