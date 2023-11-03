import React from 'react';
import useCuratedFor from '../utils/useCuratedFor';
import { CDN_URL } from '../utils/constants';
import { Spinner } from '@nextui-org/react';
import '../../index.css';

const WhatsOnMind = () => {
  const curated = useCuratedFor();
  return curated?.length === 0 ? (
    <Spinner>Loading</Spinner>
  ) : (
    <div className="curated-container text-3xl font-semibold ">
      Whats On Your Mind?
      <div className="curated" style={{ display: 'flex' }}>
        {curated?.map((type) => {
          return (
            <div key={type.id}>
              <a href={type?.action?.link}>
                <img
                  src={CDN_URL + `${type.imageId}`}
                  style={{ height: '180px', width: '144px', maxWidth: 'none' }}
                ></img>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatsOnMind;
