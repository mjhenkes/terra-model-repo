import React from 'react';
import Button from 'terra-button';

import PrimaryNavigationLayout from '@cerner/terra-application/lib/primary-navigation-layout/PrimaryNavigationLayout';
import SessionUserContext from '@cerner/terra-application/lib/session/SessionUserContext';
import { UnsavedChangesPromptCheckpoint } from '@cerner/terra-application/lib/unsaved-changes-prompt';
import { ApplicationIntlContext } from '@cerner/terra-application/lib/application-intl';

const propTypes = {};

const userContextValue = {
  username: 'demouser',
  firstName: 'Demo',
  lastName: 'User',
};

const SessionContext = React.createContext();

const style = { padding: '0 1.5rem' };

const SessionProvider = ({ children }) => {
  const applicationIntl = React.useContext(ApplicationIntlContext);
  const checkpointRef = React.useRef();

  const [state, setState] = React.useState({
    isLoggedIn: true,
    isLoggedOut: false,
    isLocked: false,
  });

  const sessionActionsContextValue = React.useMemo(() => ({
    logout: () => {
      checkpointRef.current.resolvePrompts().then(() => {
        setState({ isLoggedIn: false, isLoggedOut: true, isLocked: false });
      });
    },
    lock: () => {
      checkpointRef.current.resolvePrompts().then(() => {
        setState({ isLoggedIn: false, isLoggedOut: false, isLocked: true });
      });
    },
  }), [applicationIntl]);

  let content;

  if (state.isLoggedOut) {
    content = (
      <PrimaryNavigationLayout>
        <main style={style}>
          <h1>Logged Out</h1>
          <p>You have been logged out.</p>
          <br />
          <Button text="Reload" onClick={() => { window.location.reload(); }} />
        </main>
      </PrimaryNavigationLayout>
    );
  }

  if (state.isLocked) {
    content = (
      <SessionUserContext.Provider value={userContextValue}>
        <PrimaryNavigationLayout
          onSelectLogout={() => { setState({ isLoggedIn: false, isLocked: false, isLoggedOut: true }); }}
        >
          <main style={style}>
            <h1>Session Locked</h1>
            <br />
            <Button text="Unlock Session" onClick={() => { setState({ isLoggedIn: true, isLocked: false, isLoggedOut: false }); }} />
            <Button
              text="Log Out"
              onClick={sessionActionsContextValue.logout}
            />
          </main>
        </PrimaryNavigationLayout>
      </SessionUserContext.Provider>
    );
  }

  if (state.isLoggedIn) {
    content = (
      <SessionUserContext.Provider value={userContextValue}>
        {children}
      </SessionUserContext.Provider>
    );
  }

  return (
    <UnsavedChangesPromptCheckpoint ref={(ref) => { checkpointRef.current = ref; }}>
      {content || (
        <PrimaryNavigationLayout
          id="demo-app-login-page"
        >
          <main style={style}>
            <h1>Not Logged In</h1>
            <br />
            <Button text="Log In" onClick={() => { setState({ isLoggedIn: true, isLocked: false, isLoggedOut: false }); }} />
          </main>
        </PrimaryNavigationLayout>
      )}
    </UnsavedChangesPromptCheckpoint>
  );
};

SessionProvider.propTypes = propTypes;

export default SessionProvider;
export { SessionContext };
