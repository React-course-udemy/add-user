import React from 'react';

const UserList = ({list}) => {
    return (
        <div>{
            list.map((el, i)=>(
                
                <p key= {i} style={{backgroundColor:"white"}}>{el.name} {el.age}</p>
            )
                
            )}
        </div>
    );
};

export default UserList;