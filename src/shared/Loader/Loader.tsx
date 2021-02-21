import React from "react"
import Spinner from "react-bootstrap/Spinner"
export const Loader = () => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <Spinner animation="border" variant="dark" />
    </div>
  )
}
