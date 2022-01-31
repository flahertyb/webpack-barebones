const mocker = HttpRequestMock.setup();

/**
 * If you call this function, it will intercept any HTTP GET request
 * made to '/books' and '/authors/:authorId', regardless of the library
 * you use.
 */
const mockApi = () => {
  mocker.get("/books", [
    {
      title: "The Meaning of Mariah Carey",
      authorId: 1,
      bookId: 11,
      rating: 99,
    },
    {
      title: "African American Poetry: 250 Years of Struggle & Song",
      authorId: 2,
      bookId: 12,
      rating: 78,
    },
    {
      title: "The Vanishing Half",
      authorId: 3,
      bookId: 13,
      rating: 12,
    },
    {
      title: "Breasts and Eggs",
      authorId: 4,
      bookId: 14,
      rating: 83,
    },
    {
      title: "Beowulf: A New Translation",
      authorId: 5,
      bookId: 15,
      rating: 81,
    },
    {
      title: "Uncanny Valley",
      authorId: 6,
      bookId: 16,
      rating: 66,
    },
    {
      title: "A Burning",
      authorId: 7,
      bookId: 17,
      rating: 47,
    },
    {
      title: "Minor Detail",
      authorId: 8,
      bookId: 18,
      rating: 37,
    },
    {
      title: "Unworthy Republic",
      authorId: 9,
      bookId: 19,
      rating: 57,
    },
    {
      title: "Moby Dick",
      authorId: 10,
      bookId: 20,
      rating: 17,
    },
    {
      title: "Station Eleven",
      authorId: 11,
      bookId: 21,
      rating: 97,
    },
  ]);

  mocker.get("/author/1", {
    name: "Mariah Carey",
    id: 1,
  });

  mocker.get("/author/2", {
    name: "Kevin Young",
    id: 2,
  });

  mocker.get("/author/3", {
    name: "Brit Bennett",
    id: 3,
  });

  mocker.get("/author/4", {
    name: "Mieko Kawakami",
    id: 4,
  });

  mocker.get("/author/5", {
    name: "Maria Dahvana Headley",
    id: 5,
  });

  mocker.get("/author/6", {
    name: "Anna Wiener",
    id: 6,
  });

  mocker.get("/author/7", {
    name: "Megha Majumdar",
    id: 7,
  });

  mocker.get("/author/8", {
    name: "Claudio Saunt",
    id: 8,
  });

  mocker.get("/author/9", {
    name: "Adania Shibli ",
    id: 9,
  });

  mocker.get("/author/10", {
    name: "Herman Melville ",
    id: 10,
  });

  mocker.get("/author/11", {
    name: "Emily St. John Mandel",
    id: 11,
  });
};

export default mockApi;
