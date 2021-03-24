import React, { useState } from 'react';
import PictureSelect from '../PictureSelect'
import './index.css';
function App () {
  const [value, setValue] = useState([]),
    [allcheck, Setallcheck] = useState(false);
  const pictures = [
    {
      id: '1',
      name: 'foo_one',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '2',
      name: 'foo_two',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
    {
      id: '3',
      name: 'foo_three',
      url: 'https://gw.alipayobjects.com/mdn/rms_d212b7/afts/img/A*LlfeSa8N0WgAAAAAAAAAAABkARQnAQ'
    },
  ];
  let changeHandle = (value) => {
    setValue(value)
    if (value.length === pictures.length) Setallcheck(true)
    else Setallcheck(false)
  }
  function allclick (e) {
    let curchecked = e.target.checked;
    let allId = pictures.map(item => item.id)
    if (curchecked) {
      setValue(allId)
      Setallcheck(true)
    } else {
      setValue([])
      Setallcheck(false)
    }
  }
  return (
    <div>
      <div>
        <input type="checkbox" onChange={allclick} checked={allcheck}></input>
        已选中{value.length}文件
      </div>
      <PictureSelect
        onChange={changeHandle}
        pictures={pictures}
        value={value}
      ></PictureSelect>
    </div>
  )
}
export default App