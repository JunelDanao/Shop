import React from 'react';

import MenuItem from '../Menu-tem/menu-item.component';

import './directory.styles.scss';
class Directory extends React.Component{
    constructor(){
    super();

        this.state ={
            sections:[{
                title:'hats',
                imageUrl:'https://i.ibb.co/5hMVFT2/hat.jpg',
                id: 1
            },
            {
                title:'jackets',
                imageUrl:'https://i.ibb.co/rpVqGZs/jacket.png',
                id: 2
            },
            {
                title:'sneakers',
                imageUrl:'https://i.ibb.co/XkzMZ8V/sneakers.png',
                id: 3
            },
            {
                title:'womens',
                imageUrl:'https://i.ibb.co/ZKf0FBr/women.jpg',
                size: 'large',
                id: 4
            },
            {
                title:'mens',
                imageUrl:'https://i.ibb.co/jJ57BJT/men.jpg',
                size: 'large',
                id: 5
            }]
        }
    }

    render (){
        return(
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title,  imageUrl, id, size }) => (
                        <MenuItem key={id} title= {title} imageUrl={imageUrl} size={size} />
                    ))}
            </div>
        );
    }
}

export default Directory;