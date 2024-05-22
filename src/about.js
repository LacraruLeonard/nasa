

  export default function copyCode(elementId) {
    const codeBlock = document.getElementById(elementId);
    const range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    try {
      document.execCommand('copy');
      alert('Code copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
    
    window.getSelection().removeAllRanges();
  }
  