// 'props' è un oggetto che contiener tutte le prop ricevute dal componente

const LinkComponent = function (props) {
  return (
    <div>
      <a href={props.link}>{props.text}</a>
    </div>
  )
}
export default LinkComponent
