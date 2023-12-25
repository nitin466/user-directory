import './dropdown.css';



const SelectMenu = ({label, action, list}) => {
  
  const itemList = list.map((item) => {

    return  <option className="options" key={item} value={item}>{item}</option>
  })

  return (
    <div className='country'>
      <div className='country-dropdown'>
        <label>{label}</label>
        <select className="country-select" onChange={(e) => action(e.target.value)}>
          <option key={'default'} value="null" >Please Select Location</option>
          {itemList}
        </select>
      </div>
    </div>
  )
}
export default SelectMenu;
