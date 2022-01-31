// HttpRequestMock is loaded globally on the page.

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
};

export default mockApi;
