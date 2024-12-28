// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific errors or all errors
    if (err.message.includes('specific error message')) {
      return false; // Prevents Cypress from failing the test
    }
  
    // If you want to ignore all uncaught exceptions, uncomment the line below
    return false;
  
    // Allow other errors to fail the test
    return true;
  });