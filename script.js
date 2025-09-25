const input = document.getElementById("textInput");
    const result = document.getElementById("result");

    input.addEventListener("input", () => {
      const text = input.value.toUpperCase();  // make case-insensitive
      const counts = {};

      // Loop through each character and count alphabets only
      for (let char of text) {
        if (char >= 'A' && char <= 'Z') {
          counts[char] = (counts[char] || 0) + 1;
        }
      }

      // Show results
      if (Object.keys(counts).length === 0) {
        result.textContent = "No alphabets yet...";
      } else {
        let displayText = "";
        for (let letter in counts) {
          displayText += `${letter}: ${counts[letter]}\n`;
        }
        result.textContent = displayText;
      }
    });