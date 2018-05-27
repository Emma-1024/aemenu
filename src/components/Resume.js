import React from 'react'
import { Glyphicon } from 'react-bootstrap'
import '../css/resume.css'

function Resume(props) {
  return (
    <div className="resume-popup">
      <div className="resume-popup-inner">
        <h3>简历</h3>
        <div className="partner">
          <span>前端工程师：</span>
          <a href="/resume/Yongjie.Wu.html" target="_blank">吴永杰</a>
        </div>
        <div className="partner">
          <span>全栈工程师：</span>
          <a href="/resume/Yepeng.Tian.html" target="_blank">田叶蓬</a>
        </div>
        <div bssize="xsmall" className="closebtn" onClick={props.closePopup}>
          <Glyphicon glyph="remove" />
        </div>
      </div>
    </div>
  )
}

export default Resume
