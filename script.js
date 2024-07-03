document.getElementById('type_here').addEventListener('input', updateStatistics);

function updateStatistics() {
    const text = document.getElementById('type_here').value;
    const charCount = text.length;
    const words = text.trim().split(/\s+/).filter(word => word);
    const wordCount = words.length;
    const byteSize = new Blob([text]).size;
    const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
    const sentenceCount = sentences.length;
    const paragraphs = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0);
    const paragraphCount = paragraphs.length;
    const avgWordLength = wordCount ? words.reduce((acc, word) => acc + word.length, 0) / wordCount : 0;
    const readingTime = Math.ceil(wordCount / 200); 
    const longestWord = words.length ? words.reduce((longest, word) => word.length > longest.length ? word : longest, '') : 'N/A';
    const wordFrequency = {};
    words.forEach(word => wordFrequency[word] = (wordFrequency[word] || 0) + 1);
    const mostFrequentWord = wordCount ? Object.keys(wordFrequency).reduce((a, b) => wordFrequency[a] > wordFrequency[b] ? a : b) : 'N/A';

    document.getElementById('charCount').textContent = charCount;
    document.getElementById('wordCount').textContent = wordCount;
    document.getElementById('byteSize').textContent = byteSize;
    document.getElementById('sentenceCount').textContent = sentenceCount;
    document.getElementById('paragraphCount').textContent = paragraphCount;
    document.getElementById('avgWordLength').textContent = avgWordLength.toFixed(2);
    document.getElementById('readingTime').textContent = `${readingTime} min${readingTime > 1 ? 's' : ''}`;
    document.getElementById('longestWord').textContent = longestWord;
    document.getElementById('mostFrequentWord').textContent = mostFrequentWord;
}