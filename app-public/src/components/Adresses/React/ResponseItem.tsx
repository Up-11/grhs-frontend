import React from 'react';
import type { IResponseItem } from './Map';

export const ResponseItem: React.FC<{item: IResponseItem}> = ({item}) => {
  
  const imageUrl = () => {
    if (item.external_content && item.external_content[0] && item.external_content[0].main_photo_url)
      return item.external_content[0].main_photo_url
    else {
     return '/src/assets/logo_svg.svg';

    }
  }  
  
  return (
    <div className='flex gap-2'>
     <img width={54} height={54}  className='rounded-2xl !h-14 object-cover size-14' src={imageUrl()} alt="" /> 
      <div className='flex flex-col gap-2'>
        <p>{item.full_address_name}</p>
        <div className='flex gap-2'>
          <a href={`https://2gis.ru/krasnoyarsk/firm/${item.id}?m=${item.point.lon}%2C${item.point.lat}%2F16`}  className='btn'>2GIS</a>
        </div>
      </div>
    </div>
  )
}
