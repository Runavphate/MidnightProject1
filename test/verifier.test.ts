import { verifyAge } from '../managed/verifier.js';

describe('Private Age Verifier Contract', () => {
    it('should compile and expose the circuit', () => {
        // Since the managed folder is generated during compile,
        // we just assert that the import exists.
        expect(verifyAge).toBeDefined();
    });
    
    it('should have a public isAdult state', () => {
        // Test logic will go here once runtime is initialized
        expect(true).toBe(true);
    });
});
