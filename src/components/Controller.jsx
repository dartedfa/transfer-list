import * as React from "react"

function Controller() {

  return (
    <section className="controller">
      <div className="controller--container">
        <button
          // sx={{ my: 0.5 }}
          // variant="outlined"
          // size="small"
          // onClick={handleAllRight}
          // disabled={left.length === 0}
          className="btn all disabled"
          aria-label="move all right"
        >
          <span>&raquo;</span>
        </button>
        <button
          // sx={{ my: 0.5 }}
          // variant="outlined"
          // size="small"
          // onClick={handleCheckedRight}
          // disabled={leftChecked.length === 0}
          className="btn single"
          aria-label="move selected right"
        >
          <span>&gt;</span>
        </button>
        <button
          // disabled={rightChecked.length === 0}
          className="btn single"
          aria-label="move selected left"
        >
          <span>&lt;</span>
        </button>
        <button
          className="btn all"
          // disabled={right.length === 0}
          aria-label="move all left"
        >
          <span>&laquo;</span>
        </button>


      </div>
    </section>
  )
}

export default Controller