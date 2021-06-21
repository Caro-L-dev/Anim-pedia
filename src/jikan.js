const apiUrl = window.env.JIKAN_API;

  const search = (event) => {
    if (event.key === "Enter") {
      axios(apiUrl + state.searchQuery).then(({ data }) => {

        /*   Result example OMDb
        Poster: "https://m.media-amazon.com/images/M/MV5BMTE5NzIwMGUtYTE1MS00MDUxLTgyZjctOWVkZDAxM2M4ZWQ4XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_SX300.jpg"
        Title: "Naruto: Shippûden"
        Type: "series"
        Year: "2007–2017"
        imdbID: "tt0988824"
        */

        
       const jikanResults = data.results
        let results = jikanResults.map(result => {
          return {
            Poster: result.image_url,
            Title: result.title,
            Type: result.type,
            Year: result.start_date + " - " + result.end_date,
            imdbID: "tt0988824"
          }
        })

        /* Result example JIKAN
        airing: false
        end_date: "2007-02-08T00:00:00+00:00"
        episodes: 220
        image_url: "https://cdn.myanimelist.net/images/anime/13/17405.jpg?s=59241469eb470604a792add6fbe7cce6"
        mal_id: 20
        members: 2061755
        rated: "PG-13"
        score: 7.93
        start_date: "2002-10-03T00:00:00+00:00"
        synopsis: "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi'..."
        title: "Naruto"
        type: "TV"
        url: "https://myanimelist.net/anime/20/Naruto"
        */

      
        setState(previousState => {
          return{ ...previousState, results: results }
        })
      });
      
    } 
  }