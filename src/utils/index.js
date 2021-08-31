
exports.getResultFor = (name, usr) => {
  const percentage = Math.round(Math.random() * 10000) / 100;

  let emoji = '🐵';

  if (percentage > 90) {
    emoji = '🦍';
  } else if (percentage > 70) {
    emoji = '🦧';
  } else if (percentage > 50) {
    emoji = '🐒';
  } else if (percentage < 20) {
    emoji = '🙈';
  }

  const result = usr.__('result.result', { emoji, percentage, name });

  return result;
}
