# Account Update Backlog

This file stores account information that has been requested to be updated in a future deployment.

## Pending Update (Requested: 2026-03-27)

**Target Account Information:**
*   **Bank:** 카카오뱅크
*   **Account Holder:** 미상
*   **Account Number:** 3333-25-3076694 (or 3333253076694)
*   **Naver Pay Link:** `https://pay.naver.com/remit/bridge/app?originUrl=https%3A%2F%2Fpay.naver.com%2Fremit%2Fqr%2Finflow%3Fv%3D1%26a%3D3333253076694%26c%3D090%26d%3D9b658dc2b7e67c459212100128925839`

## How to Apply These Changes

When instructed to apply these changes and deploy:

1.  **Update `src/App.jsx`:**
    *   Change the `account` string variable inside `handleCopy` (Line ~12) and the button `onClick` (Line ~86).
    *   **Toss Pay Link:** Update the `accountNo=` parameter in the Toss Pay button `href` (Line ~53). (e.g., `supertoss://send?amount=0&bank=%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%B1%85%ED%81%AC&accountNo=3333253076694&origin=qr`)
    *   **Naver Pay Link:** Replace the `webUrl` inside `handleNaverPay` with the new link provided above.
2.  **Deploy:** Commit the changes and push to the GitHub repository. Vercel should automatically trigger a new build and deployment.
