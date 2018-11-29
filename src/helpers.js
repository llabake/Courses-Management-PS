export const sortCourses = (courses) => {
  courses.sort((firstCourse, secondCourse) => {
    if (firstCourse.title < secondCourse.title) {
      return 1;
    } if (firstCourse.title > secondCourse.title) {
      return -1;
    } 
    return 0;
  });
  return courses;
};

const isCorrectTimeFormat = (str) => {
  const re = /^[0-9]+(?:(:[0-5][0-9])){1,2}$/;
  return re.test(str);
};

export const inputValidator = (formData) => {
  console.log(formData, 'ololp');
  const errors = {};
  let isValid = true;

  const {
    course: {
      title, category, authorId, length, 
    },
  } = formData;
  if (title.length < 2) {
    errors.title = 'Course title must be at least 2 characters.';
  }
  if (authorId.length < 1) {
    errors.authorId = 'Author name must contain at least 4 characters';
    isValid = false;
  }
  if (category.length < 1) {
    errors.category = 'Category must contain at least 2 characters';
  }
  if (!isCorrectTimeFormat(length)) {
    errors.length = `Length should only contains numbers and a colon in the format mm:ss`;
  }

  Object.keys(errors)
    .map(key => errors[key]).forEach((error) => {
      if (error.length) {
        isValid = false;
      }
    });
  return { errors, isValid };
};

export const authorInputValidator = (formData) => {
  const errors = {};
  let isValid = true;

  const {
    author: { firstName, lastName },
  } = formData;
  if (firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters.';
  }
  if (lastName.length < 2) {
    errors.lastName = 'Last name must contain at least 2 characters';
    isValid = false;
  }

  Object.keys(errors)
    .map(key => errors[key]).forEach((error) => {
      if (error.length) {
        isValid = false;
      }
    });
  return { errors, isValid };
};
