import React, { useState, useEffect } from 'react';
import './index.css';
function PictureSelect (props) {
  const [value, SetValue] = useState(props.value)
  const pictures = props.pictures
  useEffect(() => {
    SetValue(props.value);
  }, [props.value])
  let clickHandle = (id) => {
    let newlist = JSON.parse(JSON.stringify(value));
    if (value.includes(id)) {
      let index = value.indexOf(id);
      newlist.splice(index, 1);
    } else {
      newlist.push(id);
    }
    SetValue(newlist)
    props.onChange(newlist)
  }
  return (
    <div>
      {pictures.map((item) => {
        return (
          <div key={item.id} className='img-item' onClick={() => clickHandle(item.id)} >
            <input type="checkbox" value={item.id} checked={value.includes(item.id)} className='icon' onChange={() => clickHandle(item.id)} />
            <img src={item.url} />
          </div>
        )
      })}
    </div>
  )
}
export default PictureSelect