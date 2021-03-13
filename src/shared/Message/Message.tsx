import React from "react"
import Alert from "react-bootstrap/Alert"
import { IMessageProps } from "@root/shared/Message/message.props"
export const Message: React.FC<IMessageProps> = ({ message }) => {
  return (
    <Alert key={"idx"} variant="danger">
      {message}
    </Alert>
  )
}
