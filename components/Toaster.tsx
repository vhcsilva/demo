import React from "react";
import {Toast, ToastContainer} from "react-bootstrap";

export default function Toaster({
  type,
  content,
  show,
  setShow
}: any) {
  return (
    <>
      <ToastContainer>
        <Toast
            delay={3000}
            autohide={true}
            show={show}
            bg={type}
            onClose={setShow}
            className={`border border-2 border-${type}`}
          >
            <Toast.Body className="py-2">
              {content}
            </Toast.Body>
          </Toast>
      </ToastContainer>
    </>
  );
}
