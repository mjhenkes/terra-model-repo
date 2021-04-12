import React from 'react';
import {
  WorkspaceContent, WorkspaceContentActivityOverlay,
} from '@cerner/terra-application/lib/workspace';

const Tab6 = () => (
  <WorkspaceContent
    activityOverlay={<WorkspaceContentActivityOverlay variant="loading" />}
  />
);

Tab6.titleKey = 'derp';

export default Tab6;
