import './ImageGrid.css'

function ImageGrid() {
  return (
    <div className="grid">
      <div className="cell cell-1">
        <img src="/images/compressed/img_1.webp" alt="" />
      </div>
      <div className="cell cell-2">
        <img src="/images/compressed/img_3.webp" alt="" />
      </div>
      <div className="cell cell-3">
        <img src="/images/compressed/img_2.webp" alt="" />
      </div>
      <div className="cell cell-4">
        <img src="/images/compressed/img_4.webp" alt="" />
      </div>
    </div>
  )
}

export default ImageGrid
