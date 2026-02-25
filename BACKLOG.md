# Account Update Backlog

This file stores account information that has been requested to be updated in a future deployment.

## Pending Update (Requested: 2026-02-25)

**Target Account Information:**
*   **Bank:** 카카오뱅크
*   **Account Holder:** 이다현
*   **Account Number:** 3333-36-3630684 (or 3333363630684) 
*   **Naver Pay Link:** `https://pay.naver.com/remit/input?inflow=account&inflowSubType=qr&rKey=715eb1f132c9bac7e8846c78a12d36e2fce1e0b178569b155fcbf0ae48fa30d9`

## How to Apply These Changes

When instructed to apply these changes and deploy:

1.  **Update `src/App.jsx`:**
    *   Change the `account` string variable inside `handleCopy` (Line ~12) and the button `onClick` (Line ~86).
    *   **Toss Pay Link:** Update the `accountNo=` parameter in the Toss Pay button `href` (Line ~53). (e.g., `supertoss://send?amount=0&bank=%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%B1%85%ED%81%AC&accountNo=3333363630684&origin=qr`)
    *   **Naver Pay Link:** Replace the entire `href` for the Naver Pay button (Line ~69) with the new link provided above.
2.  **Deploy:** Commit the changes and push to the GitHub repository. Vercel should automatically trigger a new build and deployment.
