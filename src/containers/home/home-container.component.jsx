import React, { useEffect } from 'react';
import Api from 'services/Api';

const HomeContainer = () => {
  
  useEffect(() => {
    var callback = () => Api.notifications.getAll();

    console.log('running promise');
    callback();
  }, []);
  
  return (
    <>
    <h2>Hello</h2>
    This is my home container
    </>
  );
}

export default HomeContainer;