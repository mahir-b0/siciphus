const encrypt = (text, shift) => {
    {
        let result = '';
        for (let i = 0; i < text.length; i++) {
            let char = text[i];
            
            if (char.match(/[a-z]/i)) {
                const code = text.charCodeAt(i);
                
                if (code >= 65 && code <= 90) {
                    char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
                } else if (code >= 97 && code <= 122) {
                    char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
                }
            }
            result += char;
        }
        
        return result;
    }
}

const darkModeToggle = document.getElementById("darkmode-toggle");
const title = document.querySelector("h1");

darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        document.body.style.backgroundColor = "#242424";
        title.style.color = "white";
    } else {
        document.body.style.backgroundColor = "";
        title.style.color = "";
    }
});

const decodeButton = document.getElementById("decode-btn");
decodeButton.addEventListener('click', () => {
    const inputText = document.getElementById("decodedTextArea").value;
    const shiftValue = parseInt(document.getElementById("shift-value-box").value);
    const outputText = document.getElementById("encodedTextArea");
    outputText.value = encrypt(inputText, shiftValue); 
});


