// Require the generate-password module
import generatePassword from 'generate-password';

// Generate a random password
const password = generatePassword.generate({
  length: 12, 
  numbers: true, 
  symbols: true, 
  uppercase: true, 
  excludeSimilarCharacters: true, 
});

// Log the generated password
console.log('Generated Password:', password);
