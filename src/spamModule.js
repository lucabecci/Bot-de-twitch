const words = [
    'SPAM2',
    'SPAM2',
    'SPAM3',
    'SPAM4',
    'SPAM5',
    'SPAM6',
    'SPAM7',
    'SPAM8',
    'SPAM9',
    'SPAM10',
]
const spamTexts = () => {
    let n = Math.floor((Math.random() * 10));
        return words[n]
}

module.exports = spamTexts;