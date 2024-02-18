import React from 'react';

const RiskParameters = () => {
  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Card 1 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">What Are Risk Measures?</h2>
        <p className="mb-4">Risk measures are statistical measures that are historical predictors of investment risk and volatility, and they are also major components in modern portfolio theory (MPT). MPT is a standard financial and academic methodology for assessing the performance of a stock or a stock fund as compared to its benchmark index.</p>
        <p className="mb-4">There are five principal risk measures, and each measure provides a unique way to assess the risk present in investments that are under consideration. The five measures include alpha, beta, R-squared, standard deviation, and the Sharpe ratio. Risk measures can be used individually or together to perform a risk assessment. When comparing two potential investments, it is wise to compare similar ones to determine which investment holds the most risk.</p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-2">Alpha</h3>
        <p className="mb-4">Alpha measures risk relative to the market or a selected benchmark index. For example, if the S&P 500 has been deemed the benchmark for a particular fund, the activity of the fund would be compared to that experienced by the selected index. If the fund outperforms the benchmark, it is said to have a positive alpha. If the fund falls below the performance of the benchmark, it is considered to have a negative alpha.</p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-2">Beta</h3>
        <p className="mb-4">Beta measures the volatility or systemic risk of a fund in comparison to the market or the selected benchmark index. A beta of one indicates the fund is expected to move in conjunction with the benchmark. Betas below one are considered less volatile than the benchmark, while those over one are considered more volatile than the benchmark.</p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-2">R-Squared</h3>
        <p className="mb-4">R-Squared measures the percentage of an investment's movement attributable to movements in its benchmark index. An R-squared value represents the correlation between the examined investment and its associated benchmark. For example, an R-squared value of 95 would be considered to have a high correlation, while an R-squared value of 50 may be considered low.</p>
        <p className="mb-4">The U.S. Treasury Bill functions as a benchmark for fixed-income securities, while the S&P 500 Index functions as a benchmark for equities.</p>
      </div>

      {/* Card 5 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-2">Standard Deviation</h3>
        <p className="mb-4">Standard deviation is a method of measuring data dispersion in regards to the mean value of the dataset and provides a measurement regarding an investment’s volatility.</p>
        <p className="mb-4">As it relates to investments, the standard deviation measures how much return on investment is deviating from the expected normal or average returns.</p>
      </div>

      {/* Card 6 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold mb-2">Sharpe Ratio</h3>
        <p className="mb-4">The Sharpe ratio measures performance as adjusted by the associated risks. This is done by removing the rate of return on a risk-free investment, such as a U.S. Treasury Bond, from the experienced rate of return.</p>
        <p className="mb-4">This is then divided by the associated investment’s standard deviation and serves as an indicator of whether an investment's return is due to wise investing or due to the assumption of excess risk.</p>
      </div>

      {/* Card 7 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">What Are Ways to Minimize Risk With Stocks?</h2>
        <p className="mb-4">Ways to minimize risk when investing in stocks is to do thorough research before picking a stock, diversifying one's portfolio, investing alongside one's risk appetite, having a long-term investment horizon, not panicking in terms of volatility, and regularly evaluating your portfolio.</p>
      </div>

      {/* Card 8 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">What Are the Risks With Stocks?</h2>
        <p className="mb-4">The primary risk with a stock is that you will lose the money you invested in it. The performance of a stock is never guaranteed. If you buy a stock, the price may never increase but there is always the risk that the price will drop, causing you to lose the entire value of your investment.</p>
      </div>

      {/* Card 9 */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">What Are Risk Metrics?</h2>
        <p>Risk metrics are mathematical approaches to gauging the possible loss of a security or investment portfolio. When evaluating stocks, risk metrics help investors determine the potential downside.</p>
      </div>
    </div>
  );
};

export default RiskParameters;
