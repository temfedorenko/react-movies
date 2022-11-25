# Tasks from MATE.Academy

## Task 1
You are given movies list and a search field. Implement filtering using a useState hook.

1. On every change save the input value into the query
2. Create a visibleMovies variable in with the filtered movies
3. Check if movie.title or movie.description contains query
4. Search should be case insensitive (Inception can be found by entering inc or Inc or even iNC)

## Task 2
1. Implement form inside NewMovie component.
2. Form state should be inside NewMovie.
3. Form should have next fields:
 * title
 * description
 * imgUrl
 * imdbUrl
 * imdbId
4. On form submit callback onAdd from props should be called with new film object. Also, form should be cleared. Page should not be reloaded.

## (*) Advanced tasks (Add validation)
1. validate controls values on blur
2. title, imgUrl, imdbUrl, imdbId should be required
3. imgUrl, imdbUrl - should be valid urls (can use this regex `/^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/`)
4. invalid control should have red border and error message below
5. if form is invalid submit(and submit button) should be disabled
6. (**) show control as invalid only if control has been touched
