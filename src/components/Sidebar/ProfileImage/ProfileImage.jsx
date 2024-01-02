import React from 'react'
import myImage from '../../../assets/Santu.jpeg'

const ProfileImage = () => {
  return (
    <>
      <div className="flex justify-center mt-2">
        <img src={myImage} alt="Santu" className="w-36 h-36 rounded-full" />
      </div>
    </>
  );
}

export default ProfileImage