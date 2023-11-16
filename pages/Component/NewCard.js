import React from 'react'

const NewCard = () => {
  return (
    <div className='AddSpacing' style={{marginLeft:500}}>
<div className="card mb-3" style={{maxWidth: 54000,width:1000,height:300}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/Cu.jpg" className="img-fluid rounded-start" style={{height:250}} alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
        
    <span className="top"></span>
  <span className="right"></span>
  <span className="bottom"></span>
  <span className="left"></span>
      </div>
    </div>
  </div>
</div>
  </div>
  )
}

export default NewCard
