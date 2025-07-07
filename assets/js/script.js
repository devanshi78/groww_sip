const amountSlider = document.getElementById('customRange1');
const amountValue = document.getElementById('amountValue');

amountSlider.addEventListener('input', () => {
  amountValue.textContent = amountSlider.value;
  updateChart();
});

// for the expected return rate(p.a)
const returnRateSlider = document.getElementById('returnRateRange');
const returnRateValue = document.getElementById('returnRateValue');

returnRateSlider.addEventListener('input', () => {
  returnRateValue.textContent = returnRateSlider.value;
  updateChart();
});

// for the time period
const timeSlider = document.getElementById('monthlyInvestmentRange');
const timeValue = document.getElementById('monthlyInvestmentValue');

timeSlider.addEventListener('input', () => {
  timeValue.textContent = timeSlider.value;
  updateChart();
});