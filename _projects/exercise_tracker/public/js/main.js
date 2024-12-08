const exerciseForm = document.getElementById('addExercise');

exerciseForm.addEventListener('submit', () => {
  const userId = document.getElementById('userId').value;
  exerciseForm.action = `/exercise_tracker/api/users/${userId}/exercises`;
  exerciseForm.submit();
});
