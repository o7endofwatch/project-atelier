import React from 'react';
import ReactDom from 'react-dom';

const AnswerPhotoModal =({aphotomodalimg, setIsAPhotoModal})=> {
  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#FFF',
    padding: '50px',
    zIndex: 1000

  }
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    zIndex: 1000
  }
  return ReactDom.createPortal(
    <div className="modal">
    <div style={overlayStyle}/>
    <div style={modalStyles}>
    <img src={aphotomodalimg}/>
      <button className="btn" onClick={()=> {setIsAPhotoModal(false)}} >Close Modal</button>
    </div>
    </div>,
    document.getElementById('answerportal')
  )
}

export default AnswerPhotoModal;