import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import api from '../config/api';
import { handleError } from '../utilities/errorHandler';
import { removeDomain } from '../utilities/strings';
import PlantThumbnail from './PlantThumbnail';

const PlantRecords = () => {
  const [shed, setShed] = useState(null);
  const { shedId } = useParams();
  let history = useHistory();
  useEffect(() => {
    const findShed = async () => {
      try {
        const res = await api.get(`/api/sheds/${shedId}`);
        const foundShed = res.data;
        console.log('foundShed:', foundShed);
        if(foundShed) {
          setShed(foundShed);
        }
      } catch (error) {
        console.log(error.response);
        handleError(error, history);
      }
    }
    findShed();
  }, [shedId]);

  return (
    <>
      {
        shed &&
          <>
            <p className="path">{removeDomain(shed.owner.email)}</p>
            <div className="plant-thumbnails-container">
              {
                shed.plantRecords.map(plantRecord =>
                  <PlantThumbnail key={plantRecord._id} plantRecord={plantRecord} withOwner={false}/>
                )
              }
            </div>
          </>
      }
    </>
  );
};

export default PlantRecords;
