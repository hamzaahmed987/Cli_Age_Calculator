import inquirer from 'inquirer';

async function calculateAge() {
  const answers = await inquirer.prompt([
    {
      type: 'number',
      name: 'birthYear',
      message: 'Enter your birth year:',
    },
  ]);

  const currentYear = new Date().getFullYear();
  const age = currentYear - answers.birthYear;

  console.log(`You are ${age} years old.`);
}

calculateAge();
