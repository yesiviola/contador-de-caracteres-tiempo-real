const textArea = document.getElementById('textArea');
const charCount = document.getElementById('charCount');

textArea.addEventListener('input', () => {
  const text = textArea.value;
  const count = text.length;
  charCount.textContent = count;
});
