import React from 'react';
import { NavigationItemContext } from '@cerner/terra-application/lib/layouts';

import { Card } from '@cerner/terra-application/lib/page';

const NavigationItemCard = () => {
  const navigationItemContext = React.useContext(NavigationItemContext);

  const [deactivationCount, setDectivationCount] = React.useState(0);

  React.useEffect(() => {
    if (!navigationItemContext.isActive) {
      setDectivationCount((state) => state + 1);
    }
  }, [navigationItemContext.isActive]);

  return (
    <Card label="Navigation">
      <p>The NavigationItemContext can be used to react to changes to the navigation state of the application.</p>
      {navigationItemContext.isActive && <p>Page is now active.</p>}
      <p>
        Page has been deactivated
        {' '}
        {deactivationCount}
        {' '}
        time(s).
      </p>
      <p>
        Ancestor NavigationItem keys:
        {' '}
        <span>{navigationItemContext.navigationKeys.join(', ')}</span>
      </p>
    </Card>
  );
};

export default NavigationItemCard;
