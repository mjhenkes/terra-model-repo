import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Button from 'terra-button';

import ApplicationModal from '@cerner/terra-application/lib/application-modal/ApplicationModal';
import PrimaryNavigationLayout, { NavigationItem } from '@cerner/terra-application/lib/primary-navigation-layout';
import ApplicationConceptProvider from '@cerner/terra-application/lib/application-container/ApplicationConceptProvider';
import ModalManager from '@cerner/terra-application/lib/modal-manager';
import { ConceptContext } from '../providers/ConceptProvider';

import Page1 from '../pages/Page1';
import Page6 from '../pages/Page6';
import Page7 from '../pages/Page7';
import Page8 from '../pages/Page8';
import NavBLayout from './NavBLayout';
import NavCLayout from './NavCLayout';
import NavDLayout from './NavDLayout';
import NavELayout from './NavELayout';

import ConceptBanner from '../shared/ConceptBanner';
import NotAPage from '../shared/NotAPage';

const DemoApplicationNavigationLayout = () => {
  const conceptContext = React.useContext(ConceptContext);

  const [navigationState, setNavigationState] = React.useState('nav-A');
  const [showSearchModal, setShowSearchModal] = React.useState(false);
  const [showDetailsModal, setShowDetailsModal] = React.useState(false);

  return (
    <>
      <ApplicationConceptProvider
        description={`Concept ${conceptContext.data}`}
        layoutBanner={conceptContext.data ? <ConceptBanner data={conceptContext.data} onSelectDetails={() => { setShowDetailsModal(true); }} /> : undefined}
        modalBanner={conceptContext.data ? <ConceptBanner data={conceptContext.data} isModal /> : undefined}
      >
        <ModalManager>
          <PrimaryNavigationLayout
            id="demo-application"
            extensionItems={[{
              key: 'search',
              icon: <IconSearch />,
              text: 'Search',
            }]}
            onSelectExtensionItem={(itemKey) => {
              if (itemKey === 'search') {
                setShowSearchModal(true);
              }
            }}
            utilityItems={[{
              key: 'custom-utility-item',
              text: 'Custom Utility Item',
            }]}
            onSelectUtilityItem={(key) => {
              if (key === 'custom-utility-item') {
                console.log('Custom Utility Item selected');
              }
            }}
            onSelectHelp={() => {}}
            activeNavigationKey={conceptContext.data ? navigationState : undefined}
            onSelectNavigationItem={(key) => { setNavigationState(key); }}
            renderNavigationFallback={() => <div>404</div>}
          >
            <NavigationItem
              navigationKey="nav-A"
              label="Nav A"
              renderPage={() => <Page1 />}
            />
            <NavigationItem
              navigationKey="nav-B"
              label="Nav B"
              renderLayout={() => <NavBLayout />}
            />
            <NavigationItem
              navigationKey="nav-C"
              label="Nav C"
              renderLayout={() => <NavCLayout />}
            />
            <NavigationItem
              navigationKey="nav-D"
              label="Nav D"
              renderLayout={() => <NavDLayout />}
            />
            <NavigationItem
              navigationKey="nav-E"
              label="Nav E"
              renderLayout={() => <NavELayout />}
            />
            <NavigationItem
              navigationKey="nav-F"
              label="Nav F"
            >
              <NotAPage />
            </NavigationItem>
            <NavigationItem
              navigationKey="nav-G"
              label="Nav G"
              renderPage={() => <Page6 />}
            />
            <NavigationItem
              navigationKey="nav-H"
              label="Nav H"
              renderPage={() => <Page7 />}
            />
            <NavigationItem
              navigationKey="nav-I"
              label="Nav I"
              renderPage={() => <Page8 />}
            />
          </PrimaryNavigationLayout>
        </ModalManager>
        {showDetailsModal && (
          <ApplicationModal title="Concept Details" size="small" onRequestClose={() => { setShowDetailsModal(false); }}>
            <div style={{ padding: '1rem' }}>
              <p>Details go here.</p>
            </div>
          </ApplicationModal>
        )}
      </ApplicationConceptProvider>
      {showSearchModal && (
        <ApplicationModal title="Search" size="large" onRequestClose={() => { setShowSearchModal(false); }}>
          <div style={{ padding: '1rem' }}>
            <Button text="1" onClick={() => { conceptContext.updateData('1'); setShowSearchModal(false); }} />
            <Button text="2" onClick={() => { conceptContext.updateData('2'); setShowSearchModal(false); }} />
            <Button text="3" onClick={() => { conceptContext.updateData('3'); setShowSearchModal(false); }} />
          </div>
        </ApplicationModal>
      )}
    </>
  );
};

export default DemoApplicationNavigationLayout;
