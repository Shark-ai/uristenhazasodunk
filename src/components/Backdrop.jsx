import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function SimpleBackdrop() {
  return (
    <div>
      <Backdrop style={{backgroundColor:"#fff"}}
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open
      >
        <FontAwesomeIcon style={{color:"#143364"}} icon={faHeart} beat size="2xl"/>
      </Backdrop>
    </div>
  );
}