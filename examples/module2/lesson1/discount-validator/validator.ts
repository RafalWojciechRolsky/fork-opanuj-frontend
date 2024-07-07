export function formValidator(
  firstName: string,
  lastName: string,
  age: number
) {
  const errors: string[] = [];

  if (!firstName) {
    errors.push('First name is required');
  }

  if (!lastName) {
    errors.push('Last name is required');
  }

  if (age < 0) {
    errors.push('Age must be a positive number');
  }

  if (firstName.length < 2 || lastName.length < 2) {
    errors.push('Name (first or last) must be at least 2 characters long');
  }

  if (isNaN(age)) {
    errors.push('Age must be a number');
  }

  return errors;
}
