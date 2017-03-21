import * as selectors from '../selectors';


describe('selectors', () => {
  it('should getLoggedIn information', () => {
    expect(selectors.getLoggedIn({ auth: { user: { isLoggedIn: true }}}))
      .toMatchSnapshot();
  });
});
