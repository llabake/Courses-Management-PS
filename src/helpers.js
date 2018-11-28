export const sortCourses = (courses) => {
  courses.sort((a, b) => {
    if (a.title < b.title) {
      return 1;
    } if (a.title > b.title) {
      return -1;
    } 
    return 0;
  });
  return courses;
};

export const paginationMeta = (table, page = 1, limit = 3) => {
  const offset = (page - 1) * limit;
  const temp = Object.assign([], table);
  const result = temp.splice(offset, limit);
  return {
    page,
    offset,
    pageSize: result.length,
    pageCount: Math.ceil(table.length / limit),
    result
  };
};
