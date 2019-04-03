import React from 'react';
import Disk from '../containers/DiskContainer.jsx';

export const createDiskObject = diskId => ({
  id: diskId,
  component: <Disk id={diskId} size={diskId} key={diskId} />
})
