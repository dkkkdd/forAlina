document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const form = e.target;
  const q1 = form.q1.value;
  const q2 = form.q2.value;
  const q3 = form.q3.value;

  const validAnswers = {
    q1: ['да', 'дааа'],
    q2: ['канешна', 'ессс'],
    q3: ['без', 'вапросав']
  };

  if (
    validAnswers.q1.includes(q1) &&
    validAnswers.q2.includes(q2) &&
    validAnswers.q3.includes(q3)
  ) {
    const message = document.getElementById('secret-message');
    message.style.display = 'block';
    setTimeout(() => {
      message.classList.remove('hidden');
    }, 10);
  } else {
    alert('Ошибка! Ответь правильно, пж 🥺');
  }
});