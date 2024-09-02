import React from 'react'

const English = () => {
  return (
    <div className="flex justify-center">
        <div className="flex flex-col w-5/6 bg-slate-100 rounded-lg justify-center pt-10 px-6 text-center">
          <h1 className="py-3 font-['Jura'] font-bold text-3xl">
            Personal Information
          </h1>
          <ul>
            <li>
              <strong>Name:</strong> Aman
            </li>
            <li>
              <strong>Age:</strong> 25
            </li>
            <li>
              <strong>Gender:</strong> M
            </li>
            <li>
              <strong>Household Size:</strong> 5
            </li>
            <li>
              <strong>Dependents:</strong> 4
            </li>
          </ul>

          <h1 className="py-3 font-['Jura'] font-bold text-3xl">
            Financial Information
          </h1>
          <ul>
            <li>
              <strong>Family Income:</strong> ₹55,000 per month
            </li>
            <li>
              <strong>Employment Status:</strong> Employed
            </li>
            <li>
              <strong>Job Stability:</strong> Permanent
            </li>
            <li>
              <strong>Fixed Monthly Expenses:</strong> ₹23,000
            </li>
            <li>
              <strong>Variable Monthly Expenses:</strong> ₹11,000
            </li>
            <li>
              <strong>Current Loans:</strong> NIL
            </li>
            <li>
              <strong>Credit Card Debt:</strong> NIL
            </li>
            <li>
              <strong>Other Obligations:</strong> NIL
            </li>
            <li>
              <strong>Risk Level:</strong> 6 (Moderate to High Risk)
            </li>
            <li>
              <strong>Goal Period:</strong> 5 years
            </li>
            <li>
              <strong>Expected Return:</strong> 20%
            </li>
          </ul>

          <h2 className="py-2">1. Current Financial Overview</h2>
          <p>
            Aman has a stable monthly income of ₹55,000 with fixed expenses of
            ₹23,000 and variable expenses of ₹11,000, leading to a total monthly
            expenditure of ₹34,000. This leaves Aman with a monthly surplus of
            ₹21,000 (₹55,000 - ₹34,000). With no current loans or debts, Aman
            has a solid foundation for investment.
          </p>

          <h2 className="py-2">2. Savings Projections</h2>
          <p>
            Assuming Aman saves ₹21,000 each month, his annual savings will be
            ₹252,000. Over the next 5 years, without considering interest or
            investment returns, his savings will be:
          </p>
          <p>
            <strong>₹252,000 x 5 = ₹1,260,000</strong>
          </p>

          <h2 className="py-2">3. Investment Suggestions</h2>
          <p>
            Given Aman's moderate to high risk appetite, a diversified
            investment portfolio is recommended, combining low, moderate, and
            high-risk options to balance safety and growth potential.
          </p>

          <h3 className="py-3 font-['Jura'] font-bold text-3xl">
            Low-Risk Options
          </h3>
          <h4 className="py-1">1. Fixed Deposits (FD)</h4>
          <p>
            <strong>Description:</strong> A fixed deposit is a financial
            instrument provided by banks offering higher interest rates than
            regular savings accounts.
          </p>
          <p>
            <strong>Expected Returns:</strong> Around 5-6% per annum.
          </p>
          <p>
            <strong>Why It's Suitable:</strong> Ensures the safety of capital
            with guaranteed returns, suitable for the conservative portion of
            Aman's investments.
          </p>

          <h4 className="py-1">2. Government Bonds</h4>
          <p>
            <strong>Description:</strong> Government bonds are debt securities
            issued by the government to support spending and obligations.
          </p>
          <p>
            <strong>Expected Returns:</strong> Around 7-8% per annum.
          </p>
          <p>
            <strong>Why It's Suitable:</strong> Low risk as they are backed by
            the government, providing steady returns.
          </p>

          <h3 className="py-3 font-['Jura'] font-bold text-3xl">
            Moderate-Risk Options
          </h3>
          <h4 className="py-1">1. Mutual Funds</h4>
          <p>
            <strong>Description:</strong> Mutual funds pool money from many
            investors to invest in a diversified portfolio of stocks, bonds, or
            other securities.
          </p>
          <p>
            <strong>Expected Returns:</strong> Around 8-12% per annum.
          </p>
          <p>
            <strong>Why It's Suitable:</strong> Balanced risk and return,
            suitable for Aman's moderate risk appetite.
          </p>

          <h4 className="py-1">2. Index Funds</h4>
          <p>
            <strong>Description:</strong> Index funds replicate the performance
            of a specific index of stocks, such as the Nifty 50 or S&P 500.
          </p>
          <p>
            <strong>Expected Returns:</strong> Around 10-12% per annum.
          </p>
          <p>
            <strong>Why It's Suitable:</strong> Lower cost and risk compared to
            actively managed funds, suitable for moderate risk tolerance.
          </p>

          <h3 className="py-3 font-['Jura'] font-bold text-3xl">
            High-Risk Options
          </h3>
          <h4 className="py-1">1. Stocks</h4>
          <p>
            <strong>Description:</strong> Investing directly in the stock market
            by buying shares of companies.
          </p>
          <p>
            <strong>Expected Returns:</strong> Can vary widely; historically
            around 15-20% per annum for a well-chosen portfolio.
          </p>
          <p>
            <strong>Why It's Suitable:</strong> Higher potential returns but
            comes with higher volatility, suitable for Aman's higher risk
            appetite.
          </p>

          <h4 className="py-1">2. Real Estate</h4>
          <p>
            <strong>Description:</strong> Investing in property to earn rental
            income or capital appreciation.
          </p>
          <p>
            <strong>Expected Returns:</strong> Around 8-12% per annum, depending
            on location and market conditions.
          </p>
          <p>
            <strong>Why It's Suitable:</strong> Potential for high returns
            through capital appreciation and rental income, suitable for high
            risk tolerance.
          </p>

          <h2 className="py-3 font-['Jura'] font-bold text-3xl">
            {" "}
            Expected Returns
          </h2>
          <p>
            Here's a summary of the potential returns based on the suggested
            investment options:
          </p>
          <ul>
            <li>Fixed Deposits: 5-6% per annum</li>
            <li>Government Bonds: 7-8% per annum</li>
            <li>Mutual Funds: 8-12% per annum</li>
            <li>Index Funds: 10-12% per annum</li>
            <li>Stocks: 15-20% per annum</li>
            <li>Real Estate: 8-12% per annum</li>
          </ul>

          <h2 className="py-3 font-['Jura'] font-bold text-3xl">Action Plan</h2>
          <ol>
            <li>
              <strong>Assess Current Financial Situation:</strong> Review your
              current income, expenses, and savings.
            </li>
            <li>
              <strong>Determine Investment Amount:</strong> Decide the amount
              you want to invest based on your monthly surplus and existing
              savings.
            </li>
            <li>
              <strong>Select Investment Options:</strong> Choose from the
              suggested investment options based on your risk appetite.
            </li>
            <li>
              <strong>Open Accounts:</strong> Open necessary accounts (e.g.,
              brokerage account for stocks, mutual fund account, etc.).
            </li>
            <li>
              <strong>Start Investing:</strong> Begin with your chosen
              investments, ensuring to diversify to mitigate risk.
            </li>
            <li>
              <strong>Regular Review:</strong> Periodically review and adjust
              your investment portfolio as needed to stay aligned with your
              financial goals.
            </li>
          </ol>
        </div>
        </div>
  )
}

export default English
