import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1>Khám phá thực đơn</h1>
        <p className='explore-menu-text'>Khám phá thực đơn phong phú với những món ăn hấp dẫn, được chế biến từ nguyên liệu thượng hạng và tay nghề ẩm thực tinh tế. Sứ mệnh của chúng tôi là thoả mãn vị giác của bạn và nâng tầm trải nghiệm ẩm thực – từng bữa ăn, một cách trọn vẹn.</p>
        <div className="explore-menu-list">
            {menu_list.map((item,index)=>{
                return (
                    <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image} alt="" />
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu
