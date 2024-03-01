const container = document.querySelector('.app-container');

const textArea = document.createElement('textarea');
const processedTextArea = document.createElement('textarea');
processedTextArea.disabled = true;

container.append(textArea, processedTextArea);
textArea.addEventListener('input', ({ target }) => {
  let currentText = target.value;

  const numCharRegex = /(#|№)/g;
  currentText = currentText.replace(numCharRegex, '&#8470;');

  const prepositionsRegex =
    /((?:^|\s))((в|без|до|для|за|через|над|по|из|у|около|под|о|про|на|к|перед|при|с|между|©))(\s)/gi;
  currentText = currentText.replace(prepositionsRegex, '$1$2&nbsp;');

  const copyrightRegex = /©/g;
  currentText = currentText.replace(copyrightRegex, '&copy;');

  const dashRegex = /(\s(-|–|—)\s)/g;
  currentText = currentText.replace(dashRegex, ' &mdash; ');

  currentText = currentText
    .replace(/"([^"]*)"/g, '&laquo;$1&raquo;')
    .replace(/«([^«]*)»/g, '&laquo;$1&raquo;');

  processedTextArea.value = currentText;
});
