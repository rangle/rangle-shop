describe('ds: DsHello component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=dshello--primary&args=title;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to DsHello!');
    });
});
