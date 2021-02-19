import React from 'react';
import {
  CardLayout, Card,
} from '@cerner/terra-application/lib/page';

const SuspenseContent = () => (
  <CardLayout>
    <Card>
      <p>This content is dynamically loaded using React.lazy/Suspense.</p>
    </Card>
  </CardLayout>
);

export default SuspenseContent;
