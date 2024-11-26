class launch {

    launchURL() {
        // cy.visit('https://demoqa.com/');
        cy.visit('https://nymag.com/');
        // cy.log('URL launched');

    }

    verifytitle() {
        cy.title().should('eq', 'DEMOQA');
    }

    checkaccessiblity() {
        cy.injectAxe(); // Inject axe-core into the page
        cy.checkA11y(); // Check for accessibility violations
    }
}

export default new launch();