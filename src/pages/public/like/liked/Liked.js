import React, { useState, useEffect} from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import { LIKED_ROUTE } from '../../../../utils/Consts';
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const fetchData = () => {
    return axios
      .get(`https://raihanapp.herokuapp.com/api/items`)
      .then((response) => response.data);
  };

export default function AccessibleBadges(props) {
    const { id } = useParams();
    const [counts, setCounts] = useState([])


    useEffect(() => {
        fetchData(id).then((data) => setCounts(data));
      }, [id]);


    


  return (
    <Link to={LIKED_ROUTE}>
    <IconButton>
      <Badge variant="dot" color="secondary">
        <FavoriteTwoToneIcon  />
      </Badge>
    </IconButton>
    </Link>
  );
}
