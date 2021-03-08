Terra.describeViewports('home', ['tiny', 'huge'], () => {
  it('checks accessibility', () => {
    browser.url('/');
    $('[class*="ApplicationContainer-module__application-container"]').waitForExist();
    Terra.validates.screenshot('main');
  });
});
