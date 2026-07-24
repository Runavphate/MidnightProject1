# Midnight Private Age Verifier

This project is a Midnight Compact smart contract that acts as a Private Age Verifier. It demonstrates the use of a public ledger state and a private witness using the `disclose()` function.

## Product Idea
**Private Age Verifier**: In many applications, users need to prove they are over a certain age (e.g., 18) without revealing their actual date of birth or age. This contract takes a user's actual age as a **private witness** (which remains hidden and is only known to the user's local proof server). The zero-knowledge circuit verifies that the age is $\ge 18$. If the check passes, the circuit uses `disclose(true)` to update a **public ledger state** (`isAdult`). This way, the blockchain only publicly records the verification result (that the user is an adult), keeping the exact age completely private.

## Prerequisites
- **Node.js**: v22+
- **Docker**: Required for the Midnight proof server.
- **Midnight Compact Compiler**: To compile the `.compact` smart contract.

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Compile the Contract**:
   This will generate the zero-knowledge circuits in the `managed/` directory.
   ```bash
   npm run compact
   ```

3. **Run Tests**:
   ```bash
   npm test
   ```

4. **Deploy to Preprod**:
   (Provide deployment script instructions here once the setup is complete)

## Screenshots
- **Compile Output (Circuits)**: *(to be added)*
- **Deployed Contract**: *(to be added)*
